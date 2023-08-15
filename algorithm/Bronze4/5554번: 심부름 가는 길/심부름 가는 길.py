#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 5554                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/5554                           #+#        #+#      #+#     #
#    Solved: 2023/08/15 13:58:43 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

s = int(input())
p = int(input())
a = int(input())
h = int(input())

t = s+p+a+h
min = t//60
sec = t-min*60

print(min)
print(sec)