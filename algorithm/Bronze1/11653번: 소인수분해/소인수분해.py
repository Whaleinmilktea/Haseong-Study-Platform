#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 11653                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/11653                          #+#        #+#      #+#     #
#    Solved: 2023/11/10 02:27:04 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline
a = int(input())

def get_fac(num):
  x = 2
  dividend = num
  while dividend != 1: # 조건식의 아이디어..
    if dividend%x == 0:
      print(x)
      dividend = dividend//x
    else:
      x+=1

get_fac(a)