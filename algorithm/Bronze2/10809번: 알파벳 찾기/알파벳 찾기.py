#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10809                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10809                          #+#        #+#      #+#     #
#    Solved: 2023/08/20 09:36:12 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

input_str = list(input().strip())
alpabet = "abcdefghijklmnopqrstuvwxyz"

for i in alpabet:
    if i in input_str:
        print(input_str.index(i), end=" ")
    else:
        print(-1, end=" ")