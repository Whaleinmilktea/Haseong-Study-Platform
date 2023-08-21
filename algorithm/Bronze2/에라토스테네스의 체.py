# 에라토스테네스의 체 구현
#
import sys
input = sys.stdin.readline

n = int(input())
prime = [i for i in range(1, n+1)] # 2부터 주어진 수까지의 전체배열
prime[0] = 0

# [2, 3, 4, 5, ... , n]

for i in range(0, n-1):
    if (prime[i] == 0): continue # 이미 지워진 수에 대해서는 처리하지 않음
    for j in range(i+i, n-1, i):
        prime[j] = 0

print(prime)

result_prime = [] # 결과를 프린트할 새로운 배열

# for i in (1, n-2):
#     if prime[i] != 0:
#         result_prime.append(prime[i])