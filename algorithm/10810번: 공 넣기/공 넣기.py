#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10810                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10810                          #+#        #+#      #+#     #
#    Solved: 2023/12/06 01:02:12 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
n, m = map(int, input().split(" "))

# 활용할 자료구조 생성
b = {}
for i in range(1, n+1):
  b[i] = 0

# 반복문으로 b 최신화
for i in range(m):
  start, end, ball = map(int, input().split())
  for i in range(start, end+1):
    b[i] = str(ball)

# .values()로 값들을 불러온 다음 문자열로 맵핑하여 Join
result = ' '.join(map(str, b.values()))
print(result)