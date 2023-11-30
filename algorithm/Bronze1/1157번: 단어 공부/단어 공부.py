#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1157                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1157                           #+#        #+#      #+#     #
#    Solved: 2023/08/28 11:15:50 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
s = input().upper()
d = {}

for el in list(s):
  if el not in d:
    d[el] = 1
  else:
    d[el] += 1

mx_cnt = max(d.values())
mx_keys = []

for key, val in d.items():
  if val == mx_cnt:
    mx_keys.append(key)

if len(mx_keys) >= 2:
  print("?")
else:
  print(mx_keys[0])