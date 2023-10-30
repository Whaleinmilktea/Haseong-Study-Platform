#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2309                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2309                           #+#        #+#      #+#     #
#    Solved: 2023/10/11 22:00:29 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

arr = [int(input()) for _ in range(9)]
s1 = 0
s2 = 0

for i in range(9):
  for j in range(i+1, 9):
    if sum(arr) - (arr[i] + arr[j]) == 100:
      s1 = arr[i]
      s2 = arr[j]

arr.remove(s1)
arr.remove(s2)
arr.sort()

for i in arr:
  print(i)
