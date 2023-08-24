#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1546                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1546                           #+#        #+#      #+#     #
#    Solved: 2023/08/24 14:47:44 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
n = int(input())
score_list = list(map(int, input().split()))

max_score = max(score_list) # 최고점

for i in range(0, len(score_list)):
    # if score_list[i] == max_score:
    #     continue
    # else:
        score_list[i] = (score_list[i]/max_score)*100

print(sum(score_list)/n)