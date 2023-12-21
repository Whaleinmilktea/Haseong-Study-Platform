#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1476                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1476                           #+#        #+#      #+#     #
#    Solved: 2023/12/21 18:02:55 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
e, s, m = map(int, input().split(" "))
e_cnt = 1
s_cnt = 1
m_cnt = 1
year = 1

while True:
  if e_cnt == e and s_cnt == s and m_cnt == m:
    print(year)
    break

  year += 1

  e_cnt += 1
  if e_cnt > 15:
    e_cnt = 1

  s_cnt += 1
  if s_cnt > 28:
    s_cnt = 1

  m_cnt += 1
  if m_cnt > 19:
    m_cnt = 1