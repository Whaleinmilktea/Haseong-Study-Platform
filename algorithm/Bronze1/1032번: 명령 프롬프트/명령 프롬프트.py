#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1032                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1032                           #+#        #+#      #+#     #
#    Solved: 2023/11/15 00:33:45 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline
n = int(input())

f = list(input())
l = len(f)

for i in range(n - 1) :
  o = list(input())
  for j in range(l) :
    if f[j] != o[j] :
      f[j] = '?'

print(''.join(f))
