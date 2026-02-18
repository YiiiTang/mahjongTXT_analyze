from mjanalyzer_web import parse_tiles, _validate_counts, run_automation, close_automation_session
import re

FILENAME = "SimCat VS MeowCaTS VS Rowlet VS Dartrix (2025_05_03_23_34_33_8270)-(MeowCaTS(Win))_Win.txt"
URL_DEFAULT = "https://mjanalyzer.netlify.app/"

Player = [[] for _ in range(4)]
InitialPlayer = [[] for _ in range(4)]
abandonList = []

PlayerBank = ''  # 莊家人物
def getPlayerFromLoc(char):
    order = {'E': 0, 'S': 1, 'W': 2, 'N': 3}
    if PlayerBank == '':
        return -1
    if char == PlayerBank:
        return 0
    return (order[char] - order[PlayerBank]) % 4


def processAction(StepData):
    actionStr = StepData[2]
    try:
        if actionStr == 'M':  # 摸牌，進手排
            Player[getPlayerFromLoc(StepData[1])].append(StepData[3])
        if actionStr == 'HD':  # 打牌，捨手排 去牌池
            Player[getPlayerFromLoc(StepData[1])].remove(StepData[3])
            abandonList.append(StepData[3])
        if actionStr == 'MD':  # 摸切 不加入手排 去牌池
            Player[getPlayerFromLoc(StepData[1])].remove(StepData[3])
            abandonList.append(StepData[3])
        if actionStr == 'P':  # 碰
            abandonList.remove(StepData[3])
            Player[getPlayerFromLoc(StepData[1])].append(StepData[3])
        if actionStr == 'E' or actionStr == 'EM':  # 吃
            abandonList.remove(StepData[4])
            Player[getPlayerFromLoc(StepData[1])].append(StepData[4])
        if actionStr == 'H':  # Winner
            return StepData[1]
    except Exception:
        pass


Step = []


def processFile():
    Step.clear()
    for i in range(4):
        Player[i].clear()
        InitialPlayer[i].clear()

    with open(FILENAME, "r", encoding='utf-16-le') as f:
        for line in f:
            if re.match(r'\*\s*\d+\.', line):
                Step.append(line.replace(".", "").replace("* ", "").strip().split(' '))
            if "SQRWALL" in line:
                river = line.replace("* SQRWALL ", "").split(' ')
                for i in range(0, 65):
                    if i < 17:
                        Player[0].append(river[i])
                        InitialPlayer[0].append(river[i])
                        continue
                    if i < 33:
                        Player[1].append(river[i])
                        InitialPlayer[1].append(river[i])
                        continue
                    if i < 49:
                        Player[2].append(river[i])
                        InitialPlayer[2].append(river[i])
                        continue
                    if i < 65:
                        Player[3].append(river[i])
                        InitialPlayer[3].append(river[i])
                        continue


def parse_list(cards):
    typeDict = {0: '', 1: 'm', 2: 'p', 3: 's', 4: 'z'}
    out = ""
    for card in cards:
        card = int(card)
        out += str(str(int(card / 10 % 10)) + typeDict[int(card / 100)])
    return out


def getWinnerLoc():
    for s in reversed(Step):
        if len(s) > 2 and s[2] == 'H':
            return s[1]
    if Step:
        return Step[0][1]
    return 'E'


def resetRoundState():
    global Player, abandonList
    Player = [p.copy() for p in InitialPlayer]
    abandonList = []


def buildViewData(stepIndex):
    resetRoundState()
    for i in range(stepIndex):
        processAction(Step[i])

    winner = getWinnerLoc()
    hand = [parse_tiles(parse_list(Player[getPlayerFromLoc(winner)]))]
    hand.append(parse_tiles(parse_list(Player[getPlayerFromLoc('E')])))
    hand.append(parse_tiles(parse_list(Player[getPlayerFromLoc('S')])))
    hand.append(parse_tiles(parse_list(Player[getPlayerFromLoc('W')])))
    hand.append(parse_tiles(parse_list(Player[getPlayerFromLoc('N')])))
    dead = parse_tiles(parse_list(abandonList))
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
    typeDict = {0:'花', 1:'萬', 2:'筒', 3:'條', 4:'字'}
    out =  str(str(int(card/10%10)) + typeDict[int(card/100)])
    return out

def automationCtrl(stepIndex: int):
    currentStep = max(0, min(stepIndex, len(Step)))
    currentView = 0
    while True:
        try:
            hand, dead, winner = buildViewData(currentStep)
        except ValueError as exc:
            print(f"Step {currentStep} 資料錯誤: {exc}")
            return

        loc = {0: f'贏家({winner})', 1: '東', 2: '南', 3: '西', 4: '北'}
        action = {'M':'摸', 'HD':"打", 'MD': "摸後直接打", 'P': "碰", 'E': "吃",'EM': "吃", 'H': '為贏家'}
        print("\n" + "=" * 40)
        print(f"Step: {currentStep}/{len(Step)}")
        if currentStep > 0:
            print(f"Action: {' '.join(Step[currentStep - 1][1:])} ({loc[getPlayerFromLoc(Step[currentStep - 1][1])]} {action[Step[currentStep - 1][2]]} {strCard(int(Step[currentStep - 1][3]))})")
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
        if status_text is None:
            print("網站回傳進聽: (抓取失敗)")
        elif shanten is None:
            print(f"網站回傳進聽: {status_text}")
        else:
            print(f"網站回傳進聽: {status_text} (上聽數: {shanten})")

        action = readNavAction()
        if action == 'quit':
            close_automation_session()
            return
        if action == 'prev_step':
            currentStep = max(0, currentStep - 1)
        elif action == 'next_step':
            currentStep = min(len(Step), currentStep + 1)
        elif action == 'prev_view':
            currentView = (currentView - 1) % 5
        elif action == 'next_view':
            currentView = (currentView + 1) % 5
        elif action == 'jump_step':
            raw = input(f"Step index (0-{len(Step)}): ").strip()
            if raw.isdigit():
                currentStep = min(len(Step), max(0, int(raw)))


if __name__ == "__main__":
    processFile()
    PlayerBank = Step[0][1]
    inputIndex = input('輸入模擬的步驟:(Enter=last)')
    if inputIndex == '':
        inputIndex = len(Step)
    else:
        inputIndex = int(inputIndex)

    if inputIndex > len(Step):
        print("超出模擬步驟範圍")
        raise SystemExit(1)

    automationCtrl(inputIndex)