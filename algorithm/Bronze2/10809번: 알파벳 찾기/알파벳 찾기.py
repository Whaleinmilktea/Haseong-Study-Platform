#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10809                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10809                          #+#        #+#      #+#     #
#    Solved: 2023/08/20 09:36:12 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 의사코드
# 빈 딕셔너리에 s리스트에 속한 요소를 el:index 형식으로 추가
s = list(input())
d = {}
als = list("abcdefghijklmnopqrstuvwxyz")
r = []

for al in als:
  d[al] = -1

for el in s:
  if el in d:
    d[el] = s.index(el)

for key, val in d.items():
  r.append(str(val))

print(" ".join(r))