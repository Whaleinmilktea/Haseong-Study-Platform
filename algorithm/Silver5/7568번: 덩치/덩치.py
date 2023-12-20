#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 7568                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/7568                           #+#        #+#      #+#     #
#    Solved: 2023/12/20 23:53:04 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
n = int(input())

k = [1]*n
p = []
# 덩치의 등수 == 자신보다 더 큰 덩치를 가진 사람의 수

for _ in range(n):
  p.append(list(map(int, input().split(" "))))

for i in range(len(p)):
  for j in range(len(p)):
    if i == j:
      continue
    else:
      if p[i][0] < p[j][0] and p[i][1] < p[j][1]:
        k[i] += 1

print(" ".join(map(lambda x : str(x), k)))