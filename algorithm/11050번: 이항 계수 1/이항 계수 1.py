#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 11050                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/11050                          #+#        #+#      #+#     #
#    Solved: 2023/11/13 01:49:25 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline
n, k = map(int, input().split())

def fac(num):
  result = 1
  for i in range(1, num+1):
    result = result*i
  return result

print(fac(n) // (fac(k) * fac(n-k)))