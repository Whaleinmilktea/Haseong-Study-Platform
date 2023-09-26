#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10870                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10870                          #+#        #+#      #+#     #
#    Solved: 2023/09/26 21:14:43 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 변화식 : n = n+1

n = int(input())-1

def recur_fibonacci(n):
  if n <= 0:
    return 0
  elif n == 1:
    return 1
  else:
    return recur_fibonacci(n-1) + recur_fibonacci(n-2)

print(recur_fibonacci(n))