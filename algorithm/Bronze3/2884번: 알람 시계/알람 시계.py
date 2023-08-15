#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2884                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2884                           #+#        #+#      #+#     #
#    Solved: 2023/08/15 15:31:58 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

h, m = map(int, input().split())

alert = (h*60+m) - 45
alert_h = alert//60
alert_m = alert - alert_h*60
if (alert_h < 0):
    alert_h = alert_h + 24

print(f"{alert_h} {alert_m}")
