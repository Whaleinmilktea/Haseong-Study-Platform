#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2635                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2635                           #+#        #+#      #+#     #
#    Solved: 2023/12/21 19:06:13 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
def continue_num(num, start):
  temp = []
  temp.append(num)
  temp.append(start)
  index = 2
  while True:
    cur = temp[index-2]-temp[index-1]
    if cur < 0:
      break
    else:
      temp.append(cur)
      index += 1
  return temp

n = int(input())
scen = []

for i in range(1, n+1):
  scen.append(continue_num(n, i))

max_scen = scen[0]

for i in range(1, len(scen)):
  if len(max_scen) <= len(scen[i]):
    max_scen = scen[i]

print(len(max_scen))
print(" ".join(map(lambda x : str(x), max_scen)))