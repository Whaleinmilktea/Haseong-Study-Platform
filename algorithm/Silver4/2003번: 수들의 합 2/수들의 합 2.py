#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2003                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2003                           #+#        #+#      #+#     #
#    Solved: 2023/12/26 21:08:49 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# n개로 이뤄진 수열'
# 경우의 수 cnt += 1
# 1 -> 2 -> 3 -> 4 ...
#   변수 temp += i
#     if temp == m:
#       cnt + 1
# 2 -> 3 -> 4 ...
#   변수 temp += i
#     if temp == m:
#       cnt + 1
# 3 -> 4 -> ...
#   변수 temp += i
#     if temp == m:
#       cnt + 1

n, m = map(int, input().split())
nums = list(map(int, input().split()))

i, j = 0, 1
cnt = 0
while j<=n and i<=j:
    sum_nums = nums[i:j]
    total = sum(sum_nums)
    if total == m:
        cnt += 1
        j += 1
    elif total < m:
        j += 1
    else:
        i += 1

print(cnt)