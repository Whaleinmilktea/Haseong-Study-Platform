#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2163                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2163                           #+#        #+#      #+#     #
#    Solved: 2023/11/14 18:06:16 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline
n, m = map(int, input().split())

if n == 1 and m == 1:
  print(0)
elif n > m:
  print((m*(n-1)) + (m-1))
elif n <= m:
  print((n*(m-1)) + (n-1))