#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 5086                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/5086                           #+#        #+#      #+#     #
#    Solved: 2023/08/17 11:29:52 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

while True:
  a, b = map(int, input().split())
  if a < b:
    if b % a == 0:
      print("factor")
    else:
      print("neither")
  elif a > b:
    if a % b == 0:
      print("multiple")
    else:
      print("neither")
  if a == 0 and b == 0:
    break