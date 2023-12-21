#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1251                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1251                           #+#        #+#      #+#     #
#    Solved: 2023/12/21 18:45:40 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
word = list(input())
result = []
tmp = []

for i in range(1, len(word) - 1):
    for j in range(i + 1, len(word) ):
        a = word[:i]
        b = word[i:j]
        c = word[j:]
        a.reverse()
        b.reverse()
        c.reverse()
        tmp.append(a + b + c)

for i in tmp:
    result.append(''.join(i))

print(sorted(result)[0])