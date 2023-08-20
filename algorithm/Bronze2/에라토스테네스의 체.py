# 에라토스테네스의 체 구현
import sys
input = sys.stdin.readline

N = int(input())

# 2~N까지의 전체 리스트 생성
index_is_prime = []

for i in range(2, N+1):
    index_is_prime.append(i) # 1~N까지의 전체리스트 생성

for i in range(N-1):
    if i % 2 == 0:
        index_is_prime[i] = None
        for j in range(2*i, N-1, i):
            index_is_prime[j] = None

print(index_is_prime)