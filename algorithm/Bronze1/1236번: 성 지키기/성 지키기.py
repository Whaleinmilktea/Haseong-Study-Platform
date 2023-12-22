#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1236                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1236                           #+#        #+#      #+#     #
#    Solved: 2023/12/20 19:39:48 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 각 행과 열에 적어도 한명씩은 있어야 함
# 행과 열에 각각 필요한 인원을 변수에 저장한 뒤, 둘 중 가장 큰 값을 print()

h, w = map(int, input().split(" "))
row_needs = 0
col_needs = 0
castle = []

for _ in range(h):
  castle.append(input())

# 행(row)을 기준으로 필요한 인원수
for i in range(h):
  if 'X' not in castle[i]:
    row_needs += 1

# 열(col)을 기준으로 필요한 인원수
# 열을 기준으로 한 새로운 리스트 만들기
for j in range(w):
  if "X" not in [castle[i][j] for i in range(h)]:
    col_needs += 1

print(max(row_needs, col_needs))

# # ! 2차원 배열 col 중심의 배열로 만들기 연습
# arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# new = []
# mid = []
# for i in range(len(arr)):# 0, 1, 2 ...
#   for j in range(len(arr[i])): # 0, 1, 2 ...
#     mid.append(arr[j][i])
#   new.append(mid)
#   mid = []

# print(new)