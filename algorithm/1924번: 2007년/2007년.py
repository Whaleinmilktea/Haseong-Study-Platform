#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1924                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1924                           #+#        #+#      #+#     #
#    Solved: 2023/11/12 14:05:36 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline
mm, dd = map(int, input().split())

day = 0
weeks = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

for i in range(mm-1): # if) 3월 2일의 Input => 2월까지의 총 일수 계산
  day += months[i]

day += dd-1
print(weeks[day%7])