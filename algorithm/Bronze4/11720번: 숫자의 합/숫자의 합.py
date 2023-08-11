#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 11720                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/11720                          #+#        #+#      #+#     #
#    Solved: 2023/08/11 09:30:48 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# import sys
# input = sys.stdin.readline

# n = int(input())

# for i in range(n-1):
#     a = 0
#     arr = list(map(int,input().split()))
#     a += arr[int(i)]
#     print(a)

n = input()
numbers = list(input())
a = 0

for i in numbers:
    a += int(i)

print(a)