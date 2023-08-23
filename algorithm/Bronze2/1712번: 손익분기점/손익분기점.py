#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1712                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1712                           #+#        #+#      #+#     #
#    Solved: 2023/08/23 11:28:56 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline
fixed_cost, var_cost, income = map(int, input().split())

if var_cost >= income:
    print(-1)
else:
  print((fixed_cost//(income-var_cost)) + 1)


