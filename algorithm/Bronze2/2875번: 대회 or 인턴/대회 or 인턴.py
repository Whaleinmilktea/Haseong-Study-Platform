#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2875                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2875                           #+#        #+#      #+#     #
#    Solved: 2023/12/13 22:07:12 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
female, male, intern = map(int, input().split())	# n 여학생 수, m 남학생 수, k 인턴쉽 학생 수
result = 0

while female >= 2 and male >= 1 and female + male >= intern + 3:
    female -= 2
    male -= 1
    result += 1

print(result)