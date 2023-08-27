#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 4344                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/4344                           #+#        #+#      #+#     #
#    Solved: 2023/08/27 12:32:48 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
t = int(input())

for i in range(t):
    each_score = list(map(int, input().split()))
    class_average = sum(each_score[1:])/each_score[0]
    over_average = []
    for j in range(1, len(each_score)):
        if each_score[j] > class_average:
            over_average.append(each_score[j])
    print((len(over_average)/each_score[0])*100,"%")