#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2720                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2720                           #+#        #+#      #+#     #
#    Solved: 2023/12/06 23:59:31 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
t = int(input())

def sol(a):
  l = [0, 0, 0, 0]
  change = a

  while change >= 25:
    change -= 25
    l[0] += 1

  while 25 > change and change >= 10:
    change -= 10
    l[1] += 1

  while 10 > change and change >= 5:
    change -= 5
    l[2] += 1

  while 5 > change and change >= 1:
    change -= 1
    l[3] += 1

  return l


for _ in range(t):
  change = int(input())
  coin = sol(change)
  print(" ".join(map(str, coin)))