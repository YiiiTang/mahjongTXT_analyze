from analyze import getRound
from fileProcess import RoundState, States, playerState
from typing import List
import pandas 


def first_step_ting(stats: States, int_player: int) -> int:
      out = -1
      tmp = 999
      for i in stats.state:
            shanting = i.player[int_player].shantenCount
            if(shanting < tmp):
                  tmp = shanting
                  out = i.stepId
            pass
      if tmp == 0:
        return out
      else: return -1

def not_winner(winner:str) -> List[str]:
      loc = ['W', 'S', 'N', 'E']
      for i in loc:
            if(winner == i): loc.remove(winner)
      return loc


if __name__ == "__main__":
      states = getRound("SimCat VS MeowCaTS VS Rowlet VS Dartrix (2025_05_03_23_34_33_8270)-(MeowCaTS(Win))_Win.txt")

      
      for i in not_winner(states.winnerLoc):
            MD_count = 0 #連續摸切
            #從上廳數=0到結束
            for j in range(first_step_ting(states, states.player_index_from_loc(i)), len(states.state)):
                        if j == -1:
                              print(f"{i}沒聽牌")
                              break

                        #印出它專屬動作
                        if states.state[j].stepData[1] == i:
                              print(j, states.state[j].stepStr)
                        
                        #連續摸切
                        if(states.state[j-1].stepData[1] == i):
                              if states.state[j-1].stepData[2] == "M" and states.state[j].stepData[2] == "MD":
                                    MD_count+=1
                              elif states.state[j].stepData[2] == "M" or states.state[j].stepData[2] == "H": pass
            print(f"{i} 連續摸切: {MD_count}" )