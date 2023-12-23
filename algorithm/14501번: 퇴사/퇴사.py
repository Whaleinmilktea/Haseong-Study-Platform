#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 14501                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/14501                          #+#        #+#      #+#     #
#    Solved: 2023/12/23 21:33:38 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 최대한 많은 상담
# T = 소요시간, P = 금액

# [[3, 10], [5, 20], [1, 10], [1, 20], [2, 15], [4, 40], [2, 200]]

# Step1
# [3, 10] => [True, True, True, False] * P
# if counsel[i] == True:
#   continue
# [1, 20] => [True, True, True, True] * P
# ...
# 체크완료 => 다음 인덱스부터 탐색

# Step2
# 0번째 인덱스의 0번째 요소를 counsel에 찍으려면?
  # for i in range(j, booking[j][0]):
  #   counsel[i] = True

# for i in range(len(counsel)):
#   income = 0
#   for j in range(i, len(counsel)):
#     if counsel[j] != 0:
#       continue
#     if j + booking[j][0] > len(counsel):
#       continue
#     cnt = j
#     while True:
#       if cnt == j + booking[j][0]:
#         break
#       counsel[cnt] = True
#       cnt += 1
#     income +=  booking[j][1]
#   results.append(income)
#   counsel = [False]*days

# print(max(results))

n = int(input())

t = []
p = []
dp = [0 for _ in range(n+1)]

for _ in range(n):
    T, P = map(int, input().split())
    t.append(T)
    p.append(P)

for i in range(n-1, -1, -1):
    if t[i] + i > n:
        dp[i] = dp[i+1]
    else:
        dp[i] = max(dp[i+1], dp[t[i] + i] + p[i])

print(dp[0])