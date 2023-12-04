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
n, m = map(int, input().split())
l = list(map(int, input().split()))
r = []

for i in l:
  for j in l:
    for k in l:
      if i+j+k > m:
        continue
      else:
        r.append(i+j+k)

print(max(r))