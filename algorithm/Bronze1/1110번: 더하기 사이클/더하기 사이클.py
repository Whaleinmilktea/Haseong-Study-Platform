#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1110                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1110                           #+#        #+#      #+#     #
#    Solved: 2023/08/24 15:12:55 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
n = int(input())
cycle_n = n
count = 0

while True:
    a = cycle_n // 10 # "2"6
    b = cycle_n % 10 # 2"6"
    c = (a + b) % 10 # "8"
    cycle_n = (b * 10) + c
    count += 1

    if (cycle_n == n):
        break

print(count)