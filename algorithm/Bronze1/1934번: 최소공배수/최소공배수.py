#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1934                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1934                           #+#        #+#      #+#     #
#    Solved: 2023/11/13 02:36:03 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

#유클리드 호제법
# a%b = r
# if r == 0 => b ==> gcd
# if r !=0 =>b%r ==> 반복

def gcd(a, b):
  while b:
    a, b = b, a % b # 파이썬의 다중할당 (새로운 값으로 스왑할 때,)
  return a

def lcm(a, b):
  return (a * b) // gcd(a, b)

for _ in range(int(input())):
  num1, num2 = map(int, input().split())
  print(lcm(num1, num2))
