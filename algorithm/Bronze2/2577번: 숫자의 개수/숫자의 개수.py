#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2577                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2577                           #+#        #+#      #+#     #
#    Solved: 2023/08/19 14:28:50 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

a = int(input())
b = int(input())
c = int(input())

count_num = str(a*b*c)
print(int(count_num.count("0")))
for i in range(1, 10):
    print(int(count_num.count(f"{i}")))