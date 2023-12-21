#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1543                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1543                           #+#        #+#      #+#     #
#    Solved: 2023/12/21 18:12:27 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
doc = input()
word = input()
check = ""
cnt = 0

for i in doc:
  check += i
  if word in check:
    check = check.rstrip(word)
    cnt += 1

print(cnt)