#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1065                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1065                           #+#        #+#      #+#     #
#    Solved: 2023/12/22 23:31:54 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
x = int(input())
results = [i for i in range(1, 100)]

for i in range(100, x+1):
  num = list(map(int, str(i)))
  is_han = True
  for j in range(1, len(num)-1):
    if num[j-1] - num[j] != num[j] - num[j+1]:
      is_han = False
      continue
  if is_han == True:
    results.append(i)

if x < 100:
  print(len(results[0:x]))
else:
  print(len(results))