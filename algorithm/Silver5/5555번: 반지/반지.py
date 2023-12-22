#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 5555                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/5555                           #+#        #+#      #+#     #
#    Solved: 2023/12/22 02:13:02 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
target = input()
n = int(input())
rings = []
for _ in range(n):
  rings.append(input())

cnt = 0

for i in rings:
  if target in i*2:
    cnt += 1

print(cnt)