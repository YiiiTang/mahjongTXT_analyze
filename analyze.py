from dataclasses import dataclass, field
from typing import List

import re

from mjanalyzer_web import parse_tiles, _validate_counts, run_automation, close_automation_session

FILENAME = "SimCat VS MeowCaTS VS Rowlet VS Dartrix (2025_05_03_23_34_33_8270)-(MeowCaTS(Win))_Win.txt"
URL_DEFAULT = "https://mjanalyzer.netlify.app/"

@dataclass
class PlayerState:
    tiles: List[str] = field(default_factory=list)

@dataclass
class RoundState:
    players: List[PlayerState] = field(default_factory=lambda: [PlayerState() for _ in range(4)])
    initial_players: List[PlayerState] = field(default_factory=lambda: [PlayerState() for _ in range(4)])
    abandon_tiles: List[str] = field(default_factory=list)
    steps: List[List[str]] = field(default_factory=list)
    player_bank: str = ""

    def clear_all(self) -> None:
        self.steps.clear()
        self.abandon_tiles.clear()
        for p in self.players:
            p.tiles.clear()
        for p in self.initial_players:
            p.tiles.clear()

    def reset_round(self) -> None:
        self.abandon_tiles = []
        for i in range(4):
            self.players[i].tiles = self.initial_players[i].tiles.copy()


ROUND_STATE = RoundState()

#return player's id
def getPlayerNameFromLoc(char):
    order = {'E': 0, 'S': 1, 'W': 2, 'N': 3}
    if ROUND_STATE.player_bank == '':
        return -1
    if char == ROUND_STATE.player_bank:
        return 0
    return (order[char] - order[ROUND_STATE.player_bank]) % 4

#return player' class
def getPlayerFromLoc(char) -> PlayerState:
    return ROUND_STATE.players[getPlayerNameFromLoc(char)]


def processAction(StepData):
    actionStr = StepData[2]
    try:
        if actionStr == 'M':  # 摸牌，進手排
            getPlayerFromLoc(StepData[1]).tiles.append(StepData[3])
        if actionStr == 'HD':  # 打牌，捨手排 去牌池
            getPlayerFromLoc(StepData[1]).tiles.remove(StepData[3])
            ROUND_STATE.abandon_tiles.append(StepData[3])
        if actionStr == 'MD':  # 摸切 不加入手排 去牌池
            getPlayerFromLoc(StepData[1]).tiles.remove(StepData[3])
            ROUND_STATE.abandon_tiles.append(StepData[3])
        if actionStr == 'P':  # 碰
            ROUND_STATE.abandon_tiles.remove(StepData[3])
            getPlayerFromLoc(StepData[1]).tiles.append(StepData[3])
        if actionStr == 'E' or actionStr == 'EM':  # 吃
            ROUND_STATE.abandon_tiles.remove(StepData[4])
            getPlayerFromLoc(StepData[1]).tiles.append(StepData[4])
        if actionStr == 'H':  # Winner
            return StepData[1]
    except Exception:
        pass

#read txt into list
def processFile():
    ROUND_STATE.clear_all()

    with open(FILENAME, "r", encoding='utf-16-le') as f:
        for line in f:
            if re.match(r'\*\s*\d+\.', line):
                ROUND_STATE.steps.append(line.replace(".", "").replace("* ", "").strip().split(' '))
            if "SQRWALL" in line:
                river = line.replace("* SQRWALL ", "").split(' ')
                for i in range(0, 65):
                    if i < 17:
                        target = 0
                    elif i < 33:
                        target = 1
                    elif i < 49:
                        target = 2
                    else:
                        target = 3
                    ROUND_STATE.players[target].tiles.append(river[i])
                    ROUND_STATE.initial_players[target].tiles.append(river[i])

#convert list(三數字) into list(數字_文字)
def parse_list(cards):
    typeDict = {0: '', 1: 'm', 2: 'p', 3: 's', 4: 'z'}
    out = ""
    for card in cards:
        card = int(card)
        out += str(str(int(card / 10 % 10)) + typeDict[int(card / 100)])
    return out

#return winner in char
def getWinnerLoc():
    for s in reversed(ROUND_STATE.steps):
        if len(s) > 2 and s[2] == 'H':
            return s[1]
    if ROUND_STATE.steps:
        return ROUND_STATE.steps[0][1]
    return 'E'


def resetRoundState():
    ROUND_STATE.reset_round()


def buildViewData(stepIndex):
    resetRoundState()
    for i in range(stepIndex):
        processAction(ROUND_STATE.steps[i])

    winner = getWinnerLoc()
    hand = [parse_tiles(parse_list(getPlayerFromLoc(winner).tiles))]
    hand.append(parse_tiles(parse_list(getPlayerFromLoc('E').tiles)))
    hand.append(parse_tiles(parse_list(getPlayerFromLoc('S').tiles)))
    hand.append(parse_tiles(parse_list(getPlayerFromLoc('W').tiles)))
    hand.append(parse_tiles(parse_list(getPlayerFromLoc('N').tiles)))
    dead = parse_tiles(parse_list(ROUND_STATE.abandon_tiles))
    for i in range(1, 5):
        _validate_counts(hand[i], dead)
    return hand, dead, winner


def readNavAction():
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


def strCard(card: int):
    typeDict = {0: '花', 1: '萬', 2: '筒', 3: '條', 4: '字'}
    out = str(str(int(card / 10 % 10)) + typeDict[int(card / 100)])
    return out


def format_step_action(step_data, loc_map, action_map):
    text = ' '.join(step_data[1:])
    try:
        actor = loc_map[getPlayerNameFromLoc(step_data[1])]
        action_text = action_map.get(step_data[2], step_data[2])
        tile_text = strCard(int(step_data[3])) if len(step_data) > 3 else ''
        return f"{text} ({actor} {action_text} {tile_text})"
    except Exception:
        return text


def automationCtrl(stepIndex: int):
    currentStep = max(0, min(stepIndex, len(ROUND_STATE.steps)))
    currentView = 0
    while True:
        try:
            hand, dead, winner = buildViewData(currentStep)
        except ValueError as exc:
            print(f"Step {currentStep} 資料錯誤: {exc}")
            return

        loc = {0: f'贏家({winner})', 1: '東', 2: '南', 3: '西', 4: '北'}
        action = {'M': '摸', 'HD': "打", 'MD': "摸後直接打", 'P': "碰", 'E': "吃", 'EM': "吃", 'H': '為贏家'}
        print("\n" + "=" * 40)
        print(f"Step: {currentStep}/{len(ROUND_STATE.steps)}")
        if currentStep > 0:
            step_data = ROUND_STATE.steps[currentStep - 1]
            print(f"Action: {format_step_action(step_data, loc, action)}")
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
        if status_text is None:
            print("網站回傳進聽: (抓取失敗)")
        elif shanten is None:
            print(f"網站回傳進聽: {status_text}")
        else:
            print(f"網站回傳進聽: {status_text} (上聽數: {shanten})")

        if effective_tiles:
            preview = []
            for t in effective_tiles[:8]:
                label = t.get("label") or t.get("symbol") or "?"
                remain = t.get("remaining")
                prob = t.get("probability")
                if remain is None:
                    if prob is None:
                        preview.append(f"{label}")
                    else:
                        preview.append(f"{label}({prob}%)")
                else:
                    if prob is None:
                        preview.append(f"{label}({remain}枚)")
                    else:
                        preview.append(f"{label}({remain}枚/{prob}%)")
            if len(effective_tiles) > 8:
                preview.append("...")
            print("網站建議進張: " + ", ".join(preview))

        action = readNavAction()
        if action == 'quit':
            close_automation_session()
            return
        if action == 'prev_step':
            currentStep = max(0, currentStep - 1)
        elif action == 'next_step':
            currentStep = min(len(ROUND_STATE.steps), currentStep + 1)
        elif action == 'prev_view':
            currentView = (currentView - 1) % 5
        elif action == 'next_view':
            currentView = (currentView + 1) % 5
        elif action == 'jump_step':
            raw = input(f"Step index (0-{len(ROUND_STATE.steps)}): ").strip()
            if raw.isdigit():
                currentStep = min(len(ROUND_STATE.steps), max(0, int(raw)))


if __name__ == "__main__":
    processFile()
    if not ROUND_STATE.steps:
        print("找不到牌譜步驟資料")
        raise SystemExit(1)

    ROUND_STATE.player_bank = ROUND_STATE.steps[0][1]
    inputIndex = input('輸入模擬的步驟:(Enter=last)')
    if inputIndex == '':
        inputIndex = len(ROUND_STATE.steps)
    else:
        inputIndex = int(inputIndex)

    if inputIndex > len(ROUND_STATE.steps):
        print("超出模擬步驟範圍")
        raise SystemExit(1)

    automationCtrl(inputIndex)
