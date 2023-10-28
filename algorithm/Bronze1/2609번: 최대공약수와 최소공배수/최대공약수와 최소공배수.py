#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2609                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2609                           #+#        #+#      #+#     #
#    Solved: 2023/08/28 14:33:34 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  ##
import sys
input = sys.stdin.readline
a, b = map(int, input().split())

def get_common_divisor(a, b):
  a_divisor = []
  b_divisor = []
  common_divisor = []
  # 약수
  for i in range(1, a+1): #range()는 0부터 a-1까지 할당
    if a % i == 0:
      a_divisor.append(i)

  for i in range(1, b+1): #range()는 0부터 a-1까지 할당
    if b % i == 0:
      b_divisor.append(i)

  for i in a_divisor: # 만약 배열이 [4, 8, 12]라면, i에는 4, 8, 12가 각각 할당된다.
    if i in b_divisor:
      common_divisor.append(i)

  return common_divisor[len(common_divisor)-1] # 파이썬의 리스트도 0번째 요소부터 시작

def get_common_multiple(a, b):
  a_count = 1
  b_count = 1
  while True:
    if a*a_count > b*b_count: # 아이디어의 핵심 : a와 b가 같은 행동순서 안에 위치하면 안되기에 조건식으로 통제
      b_count += 1
    elif a*a_count < b*b_count:
      a_count += 1
    elif a*a_count == b*b_count:
      break
  return a*a_count

lcd = get_common_divisor(a, b)
print(lcd)

mcm = get_common_multiple(a, b)
print(mcm)