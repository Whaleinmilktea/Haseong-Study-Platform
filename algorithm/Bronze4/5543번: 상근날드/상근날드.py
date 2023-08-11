#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 5543                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/5543                           #+#        #+#      #+#     #
#    Solved: 2023/08/11 11:35:08 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# ! 중첩반복문 O(N**2)
import sys
input = sys.stdin.readline

bugger = []
for _ in range(3):
    bugger.append(int(input()))

drink = []
for _ in range(2):
    drink.append(int(input()))

print(min(bugger) + min(drink) - 50)