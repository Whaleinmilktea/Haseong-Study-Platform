#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10870                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10870                          #+#        #+#      #+#     #
#    Solved: 2023/08/23 12:44:49 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
n = int(input())

fibo_list = [0, 1]
for i in range(2, n+1):
    fibo_list.append(fibo_list[i-1] + fibo_list[i-2])

print(fibo_list[n])