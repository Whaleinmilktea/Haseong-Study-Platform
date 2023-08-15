#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2845                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2845                           #+#        #+#      #+#     #
#    Solved: 2023/08/15 13:40:47 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

people, square = map(int, input().split())
news = list(map(int, input().split()))

total_person = people*square
for i in range(len(news)):
    print(int(news[i]-total_person), end = " ")