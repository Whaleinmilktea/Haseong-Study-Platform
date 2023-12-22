#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 11557                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/11557                          #+#        #+#      #+#     #
#    Solved: 2023/12/19 02:58:26 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
test = int(input())

for _ in range(test):
  d = {}
  for _ in range(int(input())):
    s, l = map(str, input().split(" "))
    d[s] = int(l)

    cur = 0
    max_s = ""
    for key, val in d.items():
      if cur < val:
        cur = val
        max_s = key
  print(max_s)