#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 3009                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/3009                           #+#        #+#      #+#     #
#    Solved: 2023/08/17 08:22:50 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

# 추상화해야 하는 문제 : 대각의 길이를 같게 한다
x_points = []
y_points = []

for _ in range(3):
    x, y = map(int, input().split())
    x_points.append(x)
    y_points.append(y)

for i in range(3):
    if x_points.count(x_points[i]) == 1:
        x4 = x_points[i]
    if y_points.count(y_points[i]) == 1:
        y4 = y_points[i]

print(x4, y4)
