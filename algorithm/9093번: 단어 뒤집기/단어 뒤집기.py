#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 9093                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/9093                           #+#        #+#      #+#     #
#    Solved: 2023/12/17 02:57:16 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
n = int(input())

for _ in range(n):
  # 문제 해결 로직
  s = list(input().split(" "))
  r = []
  for i in s:
    r.append(i[::-1])
  print(" ".join(r))