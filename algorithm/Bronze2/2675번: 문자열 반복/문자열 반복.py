#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2675                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2675                           #+#        #+#      #+#     #
#    Solved: 2023/08/20 11:52:32 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
n = int(input())

def sol():
    r, s = map(str, input().split(" "))
    answer = ""
    l = list(s)
    for el in l:
        answer += el*int(r)
    print(answer)

for _ in range(n):
    sol()