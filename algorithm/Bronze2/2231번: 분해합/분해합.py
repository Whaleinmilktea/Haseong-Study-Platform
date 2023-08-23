#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2231                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2231                           #+#        #+#      #+#     #
#    Solved: 2023/08/23 17:29:11 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
n = int(input())
result = 0
for i in range(1, n+1):
    nums = list(map(int, str(i)))
    result = sum(nums) + i
    if result == n:
        print(i)
        break
    if i == n:
        print(0)