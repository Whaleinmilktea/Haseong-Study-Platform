#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10797                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10797                          #+#        #+#      #+#     #
#    Solved: 2023/08/14 07:48:09 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

banned_day = int(input())
car = list(map(int, input().split()))
catch = 0

for i in range(len(car)):
    if car[i] == banned_day:
        catch += 1

print(int(catch))