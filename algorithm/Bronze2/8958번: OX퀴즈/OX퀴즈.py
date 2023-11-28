#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 8958                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/8958                           #+#        #+#      #+#     #
#    Solved: 2023/08/20 09:08:32 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# # 각 케이스마다 점수를 반환하는 함수를 만든다.
# # 점수를 반환하는 함수
# # "X"를 구분자로 하여 구분자 앞 뒤의 요소들만을 묶은 배열을 새로 만든다.
# # 배열을 순회하며 각 인덱스가 지시하는 요소에서 "O"의 갯수를 카운트한다.
# # 해당 갯수까지의 합을 구하는 for문을 작성한다.

def get_score():
  s = list(map(str, input().split("X")))
  r = []
  score = 0

  for i in s:
    if i:
      r.append(i)

  for i in r:
    count = i.count("O")
    for i in range(1, count+1):
      score += i

  print(score)

n = int(input())

for _ in range(n):
  get_score()

# ox = input().split('X')
# score = 0
# for o in ox:
#   score += (len(o) * (len(o) + 1)) // 2 # 가우시안 합의 공식
#   print(score)