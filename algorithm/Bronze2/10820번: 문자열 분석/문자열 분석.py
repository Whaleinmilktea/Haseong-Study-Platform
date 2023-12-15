#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10820                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10820                          #+#        #+#      #+#     #
#    Solved: 2023/12/14 23:32:13 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
while True:
  try:
    l = list(input())
    lower = 0
    upper = 0
    number = 0
    space = 0
    for i in l:
      if i.isalpha() == True:
        if i.islower() == True:
          lower += 1
        if i.isupper() == True:
          upper += 1
      elif i.isdigit() == True:
        number += 1
      else:
        space += 1

    print(f"{lower} {upper} {number} {space}")
  except EOFError:
    break