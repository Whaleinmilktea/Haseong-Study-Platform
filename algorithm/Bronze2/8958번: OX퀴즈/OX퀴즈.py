#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 8958                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/8958                           #+#        #+#      #+#     #
#    Solved: 2023/08/20 09:08:32 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

n = int(input())

for _ in range(n):
    value = input()
    result = 0
    count = 0 # ! 문제에서 값을 필요로 할 땐, 별도의 변수를 선언하는게 가장 직관적! ==> 이 경우, 가중치!
    for i in range(len(value)):
        if value[i] == "O":
            count += 1
            result += count
        else:
            count = 0

    print(result)
