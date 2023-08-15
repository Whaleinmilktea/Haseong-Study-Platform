#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2562                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2562                           #+#        #+#      #+#     #
#    Solved: 2023/08/15 16:19:57 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

numbers = []
for _ in range(9):
    i = int(input())
    numbers.append(i)

print(max(numbers))
print(numbers.index(max(numbers))+1)