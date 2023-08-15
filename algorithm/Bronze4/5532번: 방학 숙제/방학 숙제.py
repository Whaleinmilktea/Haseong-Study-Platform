#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 5532                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/5532                           #+#        #+#      #+#     #
#    Solved: 2023/08/15 14:04:22 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
L = int(input())
K = int(input())
M = int(input())
k = int(input())
m = int(input())
i = 0

while True:
    i = i+1
    if k*i >= K and m*i >= M:
        print(L-i)
        break

