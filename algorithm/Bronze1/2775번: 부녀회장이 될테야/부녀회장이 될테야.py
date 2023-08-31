#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2775                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2775                           #+#        #+#      #+#     #
#    Solved: 2023/08/28 18:33:11 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
#

T = int(input())
dp = [[0]*15 for _ in range(15)]
dp[0] = [x for x in range(15)]

for i in range(1, 15):
  for j in range(1, 15):
    for k in range(i, j+1):
      dp[i][j] += dp[i-1][j]

for _ in range(t):
  k, n = int(input().split())
