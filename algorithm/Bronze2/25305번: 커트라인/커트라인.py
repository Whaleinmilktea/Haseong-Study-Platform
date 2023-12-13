#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 25305                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/25305                          #+#        #+#      #+#     #
#    Solved: 2023/12/11 21:06:28 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
n, k = map(int, input().split(" "))
l = list(map(int, input().split(" ")))

result = sorted(l, reverse=False)
print(result[-k])