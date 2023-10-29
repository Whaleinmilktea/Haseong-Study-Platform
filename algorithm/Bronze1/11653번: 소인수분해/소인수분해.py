#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 11653                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/11653                          #+#        #+#      #+#     #
#    Solved: 2023/11/10 02:27:04 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline
a = int(input())

fac_arr = []

def get_fac(num):
  x = 2
  dividend = num

  while True:
    if dividend % x != 0: # 먼저 나눠지는지 여부를 검사
      x += 1
    elif dividend % x == 0 and dividend != x: # 나머지가 0일 경우, 소인수 ok
      fac_arr.append(x)
      dividend = dividend // x
    elif dividend % x == 0 and dividend == x: # 이후 제수와 피제수가 동일한지 검사 why? 단순 나머지가 0일 경우와 충돌
      fac_arr.append(x)
      break

get_fac(a)
for i in fac_arr:
  print(i)