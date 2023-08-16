#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1085                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1085                           #+#        #+#      #+#     #
#    Solved: 2023/08/16 08:53:41 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

x, y, w, h = map(int, input().split())
min_w = 0
min_h = 0

if (x < w/2):
    min_w = x
else:
    min_w = w-x

if (y < h/2):
    min_h = y
else:
    min_h = h - y

print(min(min_w, min_h))