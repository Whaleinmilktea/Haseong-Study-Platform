#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10798                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10798                          #+#        #+#      #+#     #
#    Solved: 2023/11/14 18:59:09 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline
s = []
l = []
r = ""

for _ in range(5): # 입력받은 값을 1차원 리스트에 저장
  i = input().strip()
  s.append(i)
  l.append(len(i))

for i in range(max(l)):
  for j in range(5):
    if i < l[j]:
      r += s[j][i]

print(r)