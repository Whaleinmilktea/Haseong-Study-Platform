#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2490                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2490                           #+#        #+#      #+#     #
#    Solved: 2023/12/06 21:29:58 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #

for _ in range(3):
  l = list(map(int, input().split(" ")))

  result = 0

  for i in l:
    result += i

  if result == 4:
    print("E")
  elif result == 3:
    print("A")
  elif result == 2:
    print("B")
  elif result == 1:
    print("C")
  elif result == 0:
    print("D")