#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2851                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2851                           #+#        #+#      #+#     #
#    Solved: 2023/12/18 21:39:49 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
l = [int(input()) for _ in range(10)]

candi = []
r = 0

for i in l:
  r += i
  if r > 100:
    candi.append(r-100) # 점수를 출력하는 것이기 때문에, candi그대로 활용
  else:
    candi.append(-(r-100))

cur = 0
result = 0
for i in range(1, 10):
  if candi[i-1] >= candi[i]:
    result = i
    continue

print(sum(l[:result+1]))
