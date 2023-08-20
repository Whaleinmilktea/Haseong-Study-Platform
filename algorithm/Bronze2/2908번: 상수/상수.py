#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2908                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2908                           #+#        #+#      #+#     #
#    Solved: 2023/08/20 12:14:36 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #

# 입력 : 2개 수
# 오른쪽부터 읽기
# 대소비교 (min, max)

import sys
input = sys.stdin.readline

a, b = map(str, input().split())
reverse_a = ""
reverse_b = ""

for i in range(3):
    reverse_a = a[i] + reverse_a
    reverse_b = b[i] + reverse_b

print(max(reverse_a, reverse_b))