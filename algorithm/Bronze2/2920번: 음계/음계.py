#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2920                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2920                           #+#        #+#      #+#     #
#    Solved: 2023/08/24 13:52:20 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline

num_pitches = list(map(int, input().split()))
ascending = [1, 2, 3, 4, 5, 6, 7, 8]

if num_pitches == ascending:
    print("ascending")
elif num_pitches == sorted(ascending, reverse=True):
    print("descending")
else:
    print("mixed")