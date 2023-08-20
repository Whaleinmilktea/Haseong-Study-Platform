#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2750                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2750                           #+#        #+#      #+#     #
#    Solved: 2023/08/20 12:35:38 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #

# N : 정렬할 수
# 스택 = LIFO 사용 : LAST IN FIRST OUT X
# 들어오는 값들을 저장할 자료구조 필요 : 별도의 변수 X
# ! 그냥 sorted 메서드로 정렬하는 문제

import sys
input = sys.stdin.readline

N = int(input())
num_list = []

for i in range(N):
    num_list.append(int(input()))

sorted_list = sorted(num_list)

for i in range(N):
    print(sorted_list[i])