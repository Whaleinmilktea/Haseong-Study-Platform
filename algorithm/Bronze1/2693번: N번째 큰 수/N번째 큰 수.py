#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2693                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2693                           #+#        #+#      #+#     #
#    Solved: 2023/12/18 02:33:52 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
t = int(input())

for _ in range(t):
  arr = list(map(int, input().split(" ")))
  sorted_arr = sorted(arr, reverse=True)
  print(sorted_arr[2])