#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2753                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2753                           #+#        #+#      #+#     #
#    Solved: 2023/08/10 23:54:11 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
year = int(input())

if(year % 4 == 0 and (year % 100 != 0 or year % 400 == 0) ):
    print(1)
else:
    print(0)