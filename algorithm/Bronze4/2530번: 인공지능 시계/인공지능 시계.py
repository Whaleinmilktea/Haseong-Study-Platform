#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2530                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2530                           #+#        #+#      #+#     #
#    Solved: 2023/08/14 08:55:19 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #

hour, min, sec = map(int,input().split())
time = int(input())

sec += time
min += sec//60
hour += min//60
print(hour%24,min%60,sec%60)