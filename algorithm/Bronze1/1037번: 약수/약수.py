#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1037                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1037                           #+#        #+#      #+#     #
#    Solved: 2023/11/14 00:26:45 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline
n = int(input())
m = list(map(int, input().split()))
m.sort()

if len(m) % 2 == 0:
  print(m[0]*m[n-1])
else:
  print(m[(n//2)]**2) # 파이썬 거듭제곱 문법 a**b