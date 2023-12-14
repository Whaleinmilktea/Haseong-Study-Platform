#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1076                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1076                           #+#        #+#      #+#     #
#    Solved: 2023/12/14 18:42:22 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 저항은 색 3개 이용
# 처음 색 2개는 저항의 값, 마지막 색은 곱
# 저항의 값과 곱을 따로 관리? 한번에 관리?

# 자료구조
color = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet","grey", "white"]
d = {}
for i in range(0, 10):
  d[color[i]] = [str(i), 10**i]

# 로직
c1 = input()
c2 = input()
c3 = input()

fi = d[c1][0] + d[c2][0]
ml = d[c3][1]

print(int(fi)*ml)

