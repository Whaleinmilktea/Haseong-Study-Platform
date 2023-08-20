#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1978                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1978                           #+#        #+#      #+#     #
#    Solved: 2023/08/20 12:47:48 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

# N : 전체 입력의 수
# 문제의 핵심 : 리스트에 있는 자연수 중 소수는 몇개인가?
# 에라토스테네스의 채로 100 이하의 소수를 리스트로 만든 뒤, num_list[i]와 비교
N = int(input())
num_list = list(map(int, input().split()))
count = 0

# 소수판별로직
def prime_number(x): # ! 시간복잡도 N*2으로 인해, 시간초과
    if x == 1:
      return False
    for i in range(1, x):
      if x % i == 0:
        return False
      else:
        return True

# numList 소수 판별
for i in range(N):
  if prime_number(num_list[i]) == True:
    count += 1
  else:
    count += 0

# 리스트에서 True값만 카운트 => 프린트
print(count)