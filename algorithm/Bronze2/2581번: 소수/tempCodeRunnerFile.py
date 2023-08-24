import sys
input = sys.stdin.readline

m = int(input())
n = int(input())

num_list = [i for i in range(0, n+1)]
prime_list = []

for i in range(0, len(num_list)):
    if (num_list[i]==0):
        continue
    for j in range(2*i, n+1, i):
            num_list[j] = 0

for i in range(0, len(num_list)):
    if num_list[i] != 0 and num_list >= n:
        prime_list.append(num_list[i])

if len(prime_list) == 0:
    print(-1)
else:
    print(sum(prime_list))
    print(prime_list[0])