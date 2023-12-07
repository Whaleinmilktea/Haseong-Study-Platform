#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2566                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2566                           #+#        #+#      #+#     #
#    Solved: 2023/12/06 01:25:32 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 주어진 값들을 요소로 갖는 2차원 배열 생성
table = []
for _ in range(9):
  row = list(map(int, input().split(" ")))
  table.append(row)

# loop 완전탐색을 통해 최대값 탐색
# 최대값 변수에 저장하여 비교
max_val = 0
max_row = 0
max_col = 0

for i in range(9):
  for j in range(9):
    if max_val <= table[i][j]:
      max_val = table[i][j]
      max_row = i+1
      max_col = j+1

print(max_val)
print(max_row, max_col)