#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1977                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1977                           #+#        #+#      #+#     #
#    Solved: 2023/12/14 18:24:12 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
m = int(input())
n = int(input())

l = []
for i in range(1, 101):
  l.append(i**2)

r = []
for i in l:
  if i >= m and i <= n:
    r.append(i)

if len(r) == 0:
  print(-1)
else:
  print(sum(r))
  print(min(r))