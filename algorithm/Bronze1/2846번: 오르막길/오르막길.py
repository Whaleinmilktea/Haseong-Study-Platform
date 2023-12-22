#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2846                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2846                           #+#        #+#      #+#     #
#    Solved: 2023/12/19 19:40:34 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
n = int(input())
h = list(map(int, input().split(" ")))
height = 0
climb = []
lengths = []

for i in range(n):
  if height < h[i]:
    height = h[i]
    climb.append(height)
  else:
    height = h[i]
    lengths.append(climb)
    climb = []
    climb.append(height)
  if i == len(h)-1:
    lengths.append(climb)

max_len = 0
for i in range(len(lengths)):
  last_index = len(lengths[i])-1
  if lengths[i][last_index] - lengths[i][0] > max_len:
    max_len = lengths[i][last_index] - lengths[i][0]
print(max_len)