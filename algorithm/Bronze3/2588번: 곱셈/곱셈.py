#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2588                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2588                           #+#        #+#      #+#     #
#    Solved: 2023/08/15 15:27:03 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

x = int(input())
y = input()

print(x*int(y[2]))
print(x*int(y[1]))
print(x*int(y[0]))
print(x*int(y))