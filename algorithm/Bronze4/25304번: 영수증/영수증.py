#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 25304                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/25304                          #+#        #+#      #+#     #
#    Solved: 2023/08/11 10:55:33 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

x = int(input())
quantity = int(input())
check_account = 0
for i in range(quantity):
    a ,b = map(int, input().split())
    check_account += a*b
if(x == check_account):
    print("Yes")
else:
    print("No")