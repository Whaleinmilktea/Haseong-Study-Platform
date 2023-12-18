#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10448                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10448                          #+#        #+#      #+#     #
#    Solved: 2023/12/19 02:11:45 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 먼저 던지는 질문 : 브루트포스니?
# 자연수 범위 1000 : 배열의 범위 == 45
# 삼각형의 집합은 재귀 or DP
# 완탐으로 푼다면? => 45**3 => 91125 => 완탐 풀이 가능!

l = [1]
t = 1
count = 1

while True:
  count += 1
  t += count
  if t > 1000:
    break
  l.append(t)

case = int(input())

for i in range(case):
  n = int(input())
  result = 0
  for i in l:
    for j in l:
      for k in l:
        if i + j + k == n:
          result = 1
  print(result)