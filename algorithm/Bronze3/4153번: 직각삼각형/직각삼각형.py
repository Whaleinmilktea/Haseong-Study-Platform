#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 4153                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/4153                           #+#        #+#      #+#     #
#    Solved: 2023/08/16 09:04:43 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

while True:
  sides = list(map(int, input().split()))
  if sum(sides) == 0:
    break # ! 특정 중단점이 있을 때까지 반복할 때는 while문!
  hypo = max(sides)
  sides.remove(hypo)
  if hypo**2 == sides[0]**2 + sides[1]**2:
    print("right")
  else:
    print("wrong")