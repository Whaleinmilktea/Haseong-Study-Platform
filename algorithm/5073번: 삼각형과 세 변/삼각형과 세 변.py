#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 5073                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/5073                           #+#        #+#      #+#     #
#    Solved: 2023/12/07 01:16:14 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# Equilateral : 정삼각형
# Scalene : 직각삼각형
# Isosceles : 이등변삼각형
# Invalid : 삼각형의 조건을 만족하지 못하는 경우

while True:
  a, b, c = map(int, input().split())
  if a == b == c == 0:
    break

  if a + b <= c or b + c <= a or c + a <= b:
    print("Invalid")
  elif a == b == c:
    print("Equilateral")
  elif a == b or b == c or c == a:
    print("Isosceles")
  else:
    print("Scalene")
