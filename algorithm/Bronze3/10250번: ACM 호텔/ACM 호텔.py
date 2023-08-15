#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10250                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10250                          #+#        #+#      #+#     #
#    Solved: 2023/08/16 08:12:26 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

t = int(input())

for i in range(t):
    h, w, n = map(int, input().split())
    floor = n % h
    line = n // h + 1
    if n % h == 0:
      floor = h
      line -= 1
    print(floor*100+line)


