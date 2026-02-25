from dataclasses import dataclass, field
from typing import List, Optional, Tuple

import re

from mjanalyzer_web import parse_tiles, _validate_counts, run_automation, close_automation_session
from fileProcess import RoundState, States

FILENAME = "SimCat VS MeowCaTS VS Rowlet VS Dartrix (2025_05_03_23_34_33_8270)-(MeowCaTS(Win))_Win.txt"
URL_DEFAULT = "https://mjanalyzer.netlify.app/"

STATES = States()


def _parse_step_line(line: str) -> List[str]:
    # e.g. "* 24. S M 211 [S P]"
    return line.replace(".", "").replace("* ", "").strip().split(' ')


def _parse_action_text(step_str: str) -> List[str]:
    # stored stepStr format: "S M 211 ..."
    if not step_str:
        return []
    return step_str.split(' ')


def processAction(ref: RoundState, step_data: List[str]) -> Optional[str]:
    action_str = step_data[2]
    try:
        actor = STATES.get_player(ref, step_data[1])#主角

        if action_str == 'M':  # 摸牌，進手排
            actor.tiles.append(step_data[3])

        if action_str == 'HD':  # 打牌，捨手排 去牌池
            actor.tiles.remove(step_data[3])
            ref.abandonTiles.append(step_data[3])

        if action_str == 'MD':  # 摸切 不加入手排 去牌池
            actor.tiles.remove(step_data[3])
            ref.abandonTiles.append(step_data[3])

        if action_str == 'P':  # 碰
            ref.abandonTiles.remove(step_data[3])
            actor.tiles.append(step_data[3])

        if action_str in ('E', 'EM'):  # 吃
            ref.abandonTiles.remove(step_data[4])
            actor.tiles.append(step_data[4])

        if action_str == 'H':  # Winner
            return step_data[1]
    except Exception:
        print("Err")
        pass

    return None


def processFile() -> None:
    STATES.clear_all()

    step_rows: List[List[str]] = []
    river_tiles: List[str] = []

    with open(FILENAME, "r", encoding='utf-16-le') as f:
        for line in f:
            if re.match(r'\*\s*\d+\.', line):
                step_rows.append(_parse_step_line(line))
            if "SQRWALL" in line:
                river_tiles = line.replace("* SQRWALL ", "").strip().split(' ')

    if not step_rows or not river_tiles:
        return

    STATES.playerBank = step_rows[0][1]
    STATES.winnerLoc = STATES.playerBank

    initial = RoundState(stepId=0, stepStr="START")
    for i in range(0, min(65, len(river_tiles))):
        if i < 17:
            target = 0
        elif i < 33:
            target = 1
        elif i < 49:
            target = 2
        else:
            target = 3
        initial.player[target].tiles.append(river_tiles[i])

    STATES.appendRoundWithData(initial)

    for idx, step_data in enumerate(step_rows, start=1):
        prev_state = STATES.state[-1]
        step_str = ' '.join(step_data[1:])
        next_state = prev_state.clone(step_id=idx, step_str=step_str)
        winner = processAction(next_state, step_data)
        if winner:
            STATES.winnerLoc = winner
        STATES.appendRoundWithData(next_state)


def parse_list(cards: List[str]) -> str:
    type_dict = {0: '', 1: 'm', 2: 'p', 3: 's', 4: 'z'}
    out = ""
    for card in cards:
        card_num = int(card)
        out += f"{int(card_num / 10 % 10)}{type_dict[int(card_num / 100)]}"
    return out


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


def strCard(card: int) -> str:
    type_dict = {0: '花', 1: '萬', 2: '筒', 3: '條', 4: '字'}
    return f"{int(card / 10 % 10)}{type_dict[int(card / 100)]}"


def format_step_action(step_data: List[str], loc_map, action_map) -> str:
    text = ' '.join(step_data)
    try:
        actor = loc_map[STATES.player_index_from_loc(step_data[0])]
        action_text = action_map.get(step_data[1], step_data[1])
        tile_text = strCard(int(step_data[2])) if len(step_data) > 2 and step_data[2].isdigit() else ''
        return f"{text} ({actor} {action_text} {tile_text})"
    except Exception:
        return text


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


if __name__ == "__main__":
    processFile()

    if not STATES.state:
        print("找不到牌譜步驟資料")
        raise SystemExit(1)

    #步驟模擬用
    # inputIndex = input('輸入模擬的步驟:(Enter=last)')
    # if inputIndex == '':
    #     inputIndex = STATES.steps_count()
    # else:
    #     inputIndex = int(inputIndex)

    # if inputIndex > STATES.steps_count():
    #     print("超出模擬步驟範圍")
    #     raise SystemExit(1)
    # automationCtrl(inputIndex)
    #步驟模擬用

    print(STATES.get_player(STATES.state[83], 'S').shantenCount)
