#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2525                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2525                           #+#        #+#      #+#     #
#    Solved: 2023/08/15 17:11:35 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

hh, mm = map(int, input().split())
t = int(input())

H = t//60
M = t - H*60

if mm+M >= 60:
    mm = mm+M - 60
    H += 1
else:
    mm = mm+M

if hh+H >= 24:
    hh = hh+H-24
else:
    hh = hh+H

print(f"{hh} {mm}")
