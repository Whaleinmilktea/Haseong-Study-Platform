#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2752                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2752                           #+#        #+#      #+#     #
#    Solved: 2023/08/11 21:35:55 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

num_list = list(map(int, input().split()))

for i in range(len(num_list)):
    for j in range(i, len(num_list)):
        if num_list[i] > num_list[j]:
             num_list[i], num_list[j] = num_list[j], num_list[i]

for i in num_list:
    print(i)