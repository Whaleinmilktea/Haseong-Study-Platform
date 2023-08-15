#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10101                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10101                          #+#        #+#      #+#     #
#    Solved: 2023/08/15 13:27:42 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

a1 = int(input())
a2 = int(input())
a3 = int(input())

if a1 + a2 + a3 != 180:
    print("Error")
elif a1 == a2 == a3:
    print("Equilateral")
elif a1 == a2 or a1 == a3 or a2 == a3:
    print("Isosceles")
else:
    print("Scalene")


