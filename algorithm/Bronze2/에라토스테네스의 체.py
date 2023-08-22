# 에라토스테네스의 체 구현
#
import sys
input = sys.stdin.readline

n = int(input())
prime = [i for i in range(0, n+1)] # 문법 : 리스트 컴프리핸션 ==> 0부터 주어진 수까지 자연수로 이뤄진 배열
prime[1] = 0

for i in range(0, len(prime)):
    if (prime[i]==0): # 인덱스가 가리키는 원소가 0일 때는, 아무것도 실행하지 않고 다음 i를 반복
        continue
    for j in range(2*i, n+1, i): # j = i+i부터 할당하여 i만큼 증가 ==> 배수반복
            prime[j] = 0 # 배수 반복된 인덱스의 원소는 0으로 재할당 ==> 이후 i인덱스가 해당 원소를 호출할 때는 continue문으로 무시

prime_list = [p for p in prime if p != 0]
print(prime_list)
