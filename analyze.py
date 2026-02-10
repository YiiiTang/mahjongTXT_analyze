from mjanalyzer_web import parse_tiles, _validate_counts, run_automation
import re

FILENAME = "SimCat VS MeowCaTS VS Rowlet VS Dartrix (2025_05_03_23_34_33_8270)-(MeowCaTS(Win))_Win.txt"
URL_DEFAULT = "https://mjanalyzer.netlify.app/"

Player = [[] for _ in range(4)]
abandonList = []

PlayerBank = ''#莊家人物
def getPlayerFromLoc(char):
    order = {'E':0, 'S':1, 'W':2, 'N':3}
    if PlayerBank == '':
        return -1
    if char == PlayerBank:
        return 0
    return (order[char] - order[PlayerBank]) % 4

def processAction(Step):
    actionStr = Step[2]
    try:
        if(actionStr == 'M'):#摸牌，進手排
            Player[getPlayerFromLoc(Step[1])].append(Step[3])
        if(actionStr == 'HD'):#打牌，捨手排 去牌池
            Player[getPlayerFromLoc(Step[1])].remove(Step[3])
            abandonList.append(Step[3])
        if(actionStr == 'MD'):#摸切 不加入手排 去牌池
            Player[getPlayerFromLoc(Step[1])].remove(Step[3])
            abandonList.append(Step[3])
        if(actionStr == 'P'):#碰 捨對手排，進自己牌池(三排相同)
            abandonList.remove(Step[3])
            Player[getPlayerFromLoc(Step[1])].append(Step[3])
        if(actionStr == 'E' or actionStr == 'EM'):#吃 捨對手排，進自己牌池(連續)
            abandonList.remove(Step[4])
            Player[getPlayerFromLoc(Step[1])].append(Step[4])
            pass
        if(actionStr == 'EL'):#???
            pass
        if(actionStr == 'UG'):#吃 捨對手排，進自己牌池(連續)
            pass
        if(actionStr == 'H'):#Winner?
            return Step[1]
    except:
        print('err')
        pass


Step = []
def processFile():
    #Fix the format for 2025+ txt
    ##FIXME: Python好像刪不乾淨
    # modified = False
    # with open(FILENAME, "r", encoding='utf-16-le') as f:
    #     line1 = f.readline()
    #     rest_lines = f.readlines()[0:]
    #     if not line1.startswith('* '):
    #         pos = line1.find("*")
    #         if pos != -1:
    #             modified = True
    #             line1 = "* \n"#FIXME: Python其他寫法好像刪不乾淨

    # if modified:
    #     with open(FILENAME, "w", encoding='utf-16-le') as f:
    #         f.write(line1)
    #         f.writelines(rest_lines)

    
    with open(FILENAME, "r", encoding='utf-16-le') as f:
        for line in f:
            if re.match(r'\*\s*\d+\.', line):
                Step.append(line.replace(".", "").replace("* ", "").strip().split(' ')) #Step list
            if("SQRWALL" in line):
                river = line.replace("* SQRWALL ", "").split(' ')#River wall list
                for i in range(0, 65):
                    if i < 17:
                        Player[0].append(river[i])
                        continue
                    if i < 33:
                        Player[1].append(river[i])
                        continue
                    if i < 49:
                        Player[2].append(river[i])
                        continue
                    if i < 65:
                        Player[3].append(river[i])
                        continue

def strCard(cards):
    typeDict = {0:'花', 1:'萬', 2:'筒', 3:'條', 4:'字'}
    out = ""
    for card in cards:
        card = int(card)
        out +=  str(str(int(card/10%10)) + typeDict[int(card/100)] + '(' + str(card%10) +') ')
    return out

def parse_list(cards):
    typeDict = {0:'', 1:'m', 2:'p', 3:'s', 4:'z'}
    out = ""
    for card in cards:
            card = int(card)
            out +=  str(str(int(card/10%10)) + typeDict[int(card/100)])
    return out
        

if __name__ == "__main__":
    processFile()
    PlayerBank = Step[0][1]
    Winner = processAction(Step[len(Step) - 1])
    inputIndex = input('輸入模擬的步驟:(Enter=last)')
    if inputIndex == '':
        inputIndex = len(Step)
    else: inputIndex = int(inputIndex)
    if(inputIndex > len(Step)):
        print("超出模擬步驟範圍")
        exit()
    for i in range(inputIndex):
        processAction(Step[i])
        print("\n第" + str(i+1) + "步:")
        print("北:" + strCard(sorted(Player[getPlayerFromLoc('N')])))
        print("東:" + strCard(sorted(Player[getPlayerFromLoc('E')])))
        print("南:" + strCard(sorted(Player[getPlayerFromLoc('S')])))
        print("西:" + strCard(sorted(Player[getPlayerFromLoc('W')])))
        print("池:" + strCard(abandonList))

    hand = [parse_tiles(parse_list(Player[getPlayerFromLoc(Winner)]))]
    hand.append(parse_tiles(parse_list(Player[getPlayerFromLoc('E')])))
    hand.append(parse_tiles(parse_list(Player[getPlayerFromLoc('S')])))
    hand.append(parse_tiles(parse_list(Player[getPlayerFromLoc('W')])))
    hand.append(parse_tiles(parse_list(Player[getPlayerFromLoc('N')])))
    dead = parse_tiles(parse_list(abandonList))
    _validate_counts(hand[1], dead) #Check if tiles are correct
    _validate_counts(hand[2], dead) #Check if tiles are correct
    _validate_counts(hand[3], dead) #Check if tiles are correct
    _validate_counts(hand[4], dead) #Check if tiles are correct
    run_automation(
            hand=hand,
            dead=dead,
            url=URL_DEFAULT,
            headless=False,
            slow_mo=10,
            timeout_ms=0,
            screenshot='',
            pause=True,
        )