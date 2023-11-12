#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1316                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1316                           #+#        #+#      #+#     #
#    Solved: 2023/11/15 23:09:02 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# ? 핵심 아이디어 : 한번 등장한 글자는 다음에 등장해서는 안된다.
import sys
input = sys.stdin.readline

n = int(input())

for i in range(n) :
    s = input()
    for j in range(len(s)-1) :
        if s[j] == s[j+1] :
            continue
        elif s[j] in s[j+1:] :
            n -= 1
            break

print(n)