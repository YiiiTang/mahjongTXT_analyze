from analyze import getRound
from fileProcess import RoundState, States, playerState
from typing import List
from datetime import datetime
import pandas as pd
from pathlib import Path

def list_files(directory_path):
    p = Path(directory_path)
    # Use iterdir() to get direct descendants and a list comprehension to filter for files
    files = [entry for entry in p.iterdir() if entry.is_file()]
    return files

def is_tenpai(ref, states, loc):
    p = states.get_player(ref, loc)
    sh = p.shantenCount
    if sh == -1:
        return True
    return sh == 0 and (len(p.tiles) % 3 == 1)

def first_tenpai_step(states, loc_char):
    idx = states.player_index_from_loc(loc_char)
    for ref in states.state:  # stepId 遞增
        p = ref.player[idx]
        # 已聽牌：0向聽且是打完牌相位(16張，len%3==1)
        if p.shantenCount == 0 and (len(p.tiles) % 3 == 1):
            return ref.stepId
    return -2  # 沒有到聽牌


def not_winner(winner:str) -> List[str]:
      return [loc for loc in ['W', 'S', 'N', 'E'] if loc != winner]

def save_file(results):
      output_path = Path("excel.xlsx")
      output_data = pd.concat(results, ignore_index=True)
      try:
            output_data.to_excel(output_path, index=False)
            print(f"Exported to {output_path.resolve()}")
      except PermissionError:
            fallback_path = output_path.with_name(
                  f"{output_path.stem}_{datetime.now():%Y%m%d_%H%M%S}{output_path.suffix}"
            )
            output_data.to_excel(fallback_path, index=False)
            print(f"{output_path} is in use. Exported to {fallback_path.resolve()}")

if __name__ == "__main__":
      results = []

      for file in list_files("D:\\MahjongVer9-TT\\排譜\\TAAI_MJ_2025\\3"):
            file = str(file) 
            print("")
            print(file)
            states = getRound(file)
            
            #從上廳數=0到結束
            step = []
            step_table = {"M":0,"HD":0, "MD":0, "P":0,"E":0,"EM": 0, "EL":0,"ER": 0, "SM":0, "UG":0, "HG":0,"G":0,"H":0}
            ting_pai_step = first_tenpai_step(states, states.winnerLoc)
            if ting_pai_step == -2:
                 ting_pai_step = False
            
            #tiles_in_wall = states.state[first_step_ting].
            
            for j in range(1, len(states.state)):
                  #印出它專屬動作
                  if states.state[j].stepData[1] == states.winnerLoc:
                        step.append(f"{j}: {states.state[j].stepStr}")
                        #print(j, states.state[j].stepStr)
                        #統計步驟數量
                        step_table[states.state[j].stepData[2]] +=1
            mo = 0
            for i in range(1, ting_pai_step):
                  if(states.state[i].stepData[1] == states.winnerLoc and states.state[i].stepData[2] == 'M'):
                        mo+=1
                  pass
            count_ting_mountain = states.state[ting_pai_step].mountainCount
            count_win_mountain = states.state[states.steps_count()].mountainCount
                  
            #print(f"{player} 連續摸切: {MD_count}" )
            pd_data = pd.DataFrame([{
                  'filename': str(file),
                  'winner': states.winnerLoc,
                  'player': states.winnerLoc,
                  'count摸牌': step_table["M"],
                  'count打牌': step_table["HD"],
                  'count摸切': step_table["MD"],
                  'count聽前摸牌次數': mo,
                  '聽牌時排山剩餘張': count_ting_mountain,
                  '胡牌時排山剩餘張': count_win_mountain,
                  '胡牌-聽牌剩餘張' : count_ting_mountain - count_win_mountain,
                  'count碰+吃': step_table["P"] + step_table["E"] + step_table["EM"] + step_table["EL"] + step_table["ER"]
            }])
            print(pd_data)
            results.append(pd_data)
      
      #save to file
      if results:
            save_file(results)
            
