#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1373                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1373                           #+#        #+#      #+#     #
#    Solved: 2023/12/17 03:50:28 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# N진법의 핵심원리 : n 미만의 수로 표현할 수 없는 그 다음 수를 어떻게 표현할 것인가?
n = input()
ten_number = 0
answer = ''
for i in range(len(n)):
    ten_number += int(n[-1])*(2**i)
    n = n[:-1]

while ten_number != 0:
    answer += str(ten_number%8)
    ten_number = ten_number // 8

print(answer[::-1])

#! 문제에서 의도한 바겠지만,,, 아쉽..
# n = input()
# ten_number = int(n, 2)
# answer = oct(ten_number)[2:]
# print(answer)