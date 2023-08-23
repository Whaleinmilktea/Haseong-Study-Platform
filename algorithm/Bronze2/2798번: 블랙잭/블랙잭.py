#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2798                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2798                           #+#        #+#      #+#     #
#    Solved: 2023/08/23 10:20:52 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

n, m = map(int, input().split())
n_list = list(map(int, input().split()))

result = 0

for i in range(0, len(n_list)):
  for j in range(i+1, len(n_list)):
    for k in range(j+1, len(n_list)):
      if n_list[i] + n_list[j] + n_list[k] > m:
        continue
      else:
        result = max(result, n_list[i] + n_list[j] + n_list[k])

print(result)
