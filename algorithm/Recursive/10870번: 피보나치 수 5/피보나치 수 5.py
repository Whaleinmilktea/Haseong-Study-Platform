#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10870                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10870                          #+#        #+#      #+#     #
#    Solved: 2023/09/26 21:14:43 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

m = {}

def fibo(n):
# 종료조건
  if n == 0:
    return 0
  elif n == 1:
    return 1
  # 만약 memo 안에 값이 있다면 해당 값을 리턴
  elif fibo(n) in m[n]:
    return m[n]
  else:
    # 없을경우, 새로운 값을 추가
    m[n] = fibo(n-1) + fibo(n-2)
    return m[n]

n = int(input())
print(fibo(n))