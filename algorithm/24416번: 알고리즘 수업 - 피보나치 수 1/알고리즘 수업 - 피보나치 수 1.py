#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 24416                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/24416                          #+#        #+#      #+#     #
#    Solved: 2023/12/18 02:39:04 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 피보나치 수를 활용한 dp와 재귀의 비교
f = [None]*50
f[1] = f[2] = 1

n = int(input())

def fibonacci(n):
    for i in range(3, n+1):
        f[i] = f[i-1]+f[i-2]
    return f[n]

count1 = fibonacci(n)
count2 = n-2
print(count1, count2)