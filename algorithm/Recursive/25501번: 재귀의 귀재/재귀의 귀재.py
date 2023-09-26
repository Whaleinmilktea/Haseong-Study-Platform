#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 25501                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/25501                          #+#        #+#      #+#     #
#    Solved: 2023/09/26 22:13:47 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
def recursion(s, l, r):
    if l >= r:
        return 1
    elif s[l] != s[r]:
        return 0
    else:
        return recursion(s, l + 1, r - 1)

def isPalindrome(s):
    return recursion(s, 0, len(s) - 1)

# 입력 처리
T = int(input())
for _ in range(T):
    s = input().strip()
    result = isPalindrome(s)
    # 재귀 호출 횟수 계산: 처음 호출 1회 포함
    recursion_calls = 1
    print(result, recursion_calls)