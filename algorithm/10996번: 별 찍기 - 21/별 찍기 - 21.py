#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10996                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10996                          #+#        #+#      #+#     #
#    Solved: 2023/12/14 21:13:00 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
n = int(input())

l1 = [" " for _ in range(n)]
l2 = [" " for _ in range(n)]

for i in range(1, n+1):
  if i % 2 == 1:
    l1[i-1] = "*"
  if i % 2 == 0:
    l2[i-1] = "*"

for i in range(n):
  print("".join(l1))
  print("".join(l2))