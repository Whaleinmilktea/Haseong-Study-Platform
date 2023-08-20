#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2675                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2675                           #+#        #+#      #+#     #
#    Solved: 2023/08/20 11:52:32 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
#@ 첫번째 입력 : 테스트 개수 (for, while문)
#@ 두번째 입력 : R' 'for

import sys
input = sys.stdin.readline

n = int(input())

for _ in range(n):
    R, input_str = map(str, input().split())
    for i in range(len(input_str)):
        print(input_str[i]*int(R), end="")
    print()