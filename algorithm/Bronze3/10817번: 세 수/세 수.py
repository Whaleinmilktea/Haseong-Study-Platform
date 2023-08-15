#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10817                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10817                          #+#        #+#      #+#     #
#    Solved: 2023/08/16 06:47:47 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline
num_list = list(map(int, input().split()))

for i in range(len(num_list)):
    for j in range(0, len(num_list)-i-1):
        if num_list[j] > num_list[j+1]:
          num_list[j], num_list[j+1] = num_list[j+1], num_list[j]

print(num_list[1])