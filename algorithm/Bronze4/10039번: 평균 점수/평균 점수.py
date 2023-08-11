#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10039                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10039                          #+#        #+#      #+#     #
#    Solved: 2023/08/11 11:08:22 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline
total = 0

for _ in range(5):
    score = int(input())
    if (score < 40):
        total += 40
    else:
        total += score

print(total//5)