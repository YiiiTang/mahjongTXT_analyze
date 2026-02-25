from mjanalyzer_web import parse_tiles, _validate_counts, run_automation, close_automation_session

URL_DEFAULT = "https://mjanalyzer.netlify.app/"


def buildViewData(stepIndex: int) -> Tuple[List[List[str]], List[str], str]:
    ref = STATES.state[stepIndex]
    winner = STATES.winnerLoc

    hand = [parse_tiles(parse_list(STATES.get_player(ref, winner).tiles))]
    hand.append(parse_tiles(parse_list(STATES.get_player(ref, 'E').tiles)))
    hand.append(parse_tiles(parse_list(STATES.get_player(ref, 'S').tiles)))
    hand.append(parse_tiles(parse_list(STATES.get_player(ref, 'W').tiles)))
    hand.append(parse_tiles(parse_list(STATES.get_player(ref, 'N').tiles)))

    dead = parse_tiles(parse_list(ref.abandonTiles))

    for i in range(1, 5):
        _validate_counts(hand[i], dead)

    return hand, dead, winner

def readNavAction() -> str:
    try:
        import msvcrt
    except Exception:
        cmd = input("Command [a/d step, w/s player, g jump, q quit, Enter next]: ").strip().lower()
        return {
            'a': 'prev_step',
            'd': 'next_step',
            'w': 'prev_view',
            's': 'next_view',
            'g': 'jump_step',
            'q': 'quit',
            '': 'next_view',
        }.get(cmd, 'next_view')

    key = msvcrt.getwch()
    if key in ('\x00', '\xe0'):
        key2 = msvcrt.getwch()
        return {
            'K': 'prev_step',   # left
            'M': 'next_step',   # right
            'H': 'prev_view',   # up
            'P': 'next_view',   # down
        }.get(key2, 'next_view')

    if key == '\r':
        return 'next_view'

    key = key.lower()
    if key == 'q':
        return 'quit'
    if key == 'g':
        return 'jump_step'
    return 'next_view'

#can be removed?
def _parse_action_text(step_str: str) -> List[str]:
    # stored stepStr format: "S M 211 ..."
    if not step_str:
        return []
    return step_str.split(' ')


def automationCtrl(stepIndex: int, pause = False) -> None:
    currentStep = max(0, min(stepIndex, STATES.steps_count()))
    currentView = 0

    while True:
        try:
            hand, dead, winner = buildViewData(currentStep)
        except ValueError as exc:
            print(f"Step {currentStep} 資料錯誤: {exc}")
            return

        loc = {0: f'贏家({winner})', 1: '東', 2: '南', 3: '西', 4: '北'}
        action_map = {'M': '摸', 'HD': "打", 'MD': "摸後直接打", 'P': "碰", 'E': "吃", 'EM': "吃", 'H': '為贏家'}

        print("\n" + "=" * 40)
        print(f"Step: {currentStep}/{STATES.steps_count()}")
        if currentStep > 0:
            step_data = _parse_action_text(STATES.state[currentStep].stepStr)
            print(f"Action: {format_step_action(step_data, loc, action_map)}")

        print("Controls: ←/→ step, ↑/↓ view, Enter next view, G jump, Q quit")
        for i in range(5):
            marker = '>' if i == currentView else ' '
            print(f"{marker} [{i}] {loc[i]}")

        site_result = {}
        run_automation(
            hand=hand[currentView],
            dead=dead,
            url=URL_DEFAULT,
            headless=False,
            slow_mo=0,
            timeout_ms=0,
            screenshot='',
            pause=False,
            keep_open_after_run=True,
            result_holder=site_result,
        )

        status_text = site_result.get("status_text")
        shanten = site_result.get("shanten")
        effective_tiles = site_result.get("effective_tiles") or []

        if isinstance(shanten, int):#if has shanten
            view_loc = {0: winner, 1: 'E', 2: 'S', 3: 'W', 4: 'N'}[currentView]#current view is key
            player_idx = STATES.player_index_from_loc(view_loc)
            STATES.state[currentStep].player[player_idx].shantenCount = shanten


        # if status_text is None:
        #     print("網站回傳進聽: (抓取失敗)")
        # elif shanten is None:
        #     print(f"網站回傳進聽: {status_text}")
        # else:
        #     print(f"網站回傳進聽: {status_text} (上聽數: {shanten})")

        if effective_tiles:
            preview = []
            for t in effective_tiles[:8]:
                label = t.get("label") or t.get("symbol") or "?"
                remain = t.get("remaining")
                prob = t.get("probability")
                if remain is None:
                    preview.append(f"{label}" if prob is None else f"{label}({prob}%)")
                else:
                    preview.append(f"{label}({remain}枚)" if prob is None else f"{label}({remain}枚/{prob}%)")

            if len(effective_tiles) > 8:
                preview.append("...")

            print("網站建議進張: " + ", ".join(preview))
        if(pause):
            action = readNavAction()
            if action == 'quit':
                close_automation_session()
                return
            if action == 'prev_step':
                currentStep = max(0, currentStep - 1)
            elif action == 'next_step':
                currentStep = min(STATES.steps_count(), currentStep + 1)
            elif action == 'prev_view':
                currentView = (currentView - 1) % 5
            elif action == 'next_view':
                currentView = (currentView + 1) % 5
            elif action == 'jump_step':
                raw = input(f"Step index (0-{STATES.steps_count()}): ").strip()
                if raw.isdigit():
                    currentStep = min(STATES.steps_count(), max(0, int(raw)))
        else: break#break while loop

