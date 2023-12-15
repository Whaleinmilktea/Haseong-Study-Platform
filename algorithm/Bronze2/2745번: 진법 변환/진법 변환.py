#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2745                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2745                           #+#        #+#      #+#     #
#    Solved: 2023/12/12 13:42:24 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
d = {}

for i in range(ord("A"), ord("Z")+1):
  alpha = chr(i)
  d[alpha] = i-55

for i in range(0, 10):
  d[str(i)] = i

n, b = map(str, input().split(" "))
result = 0

for i in range(len(n)):
  result += d[n[0]] * int(b)**i

print(result)