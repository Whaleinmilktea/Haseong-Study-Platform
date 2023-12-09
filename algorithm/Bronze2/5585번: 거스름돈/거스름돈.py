#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 5585                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/5585                           #+#        #+#      #+#     #
#    Solved: 2023/12/10 01:25:10 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 개수가 가장 적게 잔돈을 준다
change = 1000 - int(input())

# cnt 변수 하나로 통일
cnt = 0

while change >= 500:
  change -= 500
  cnt += 1

while change >= 100 and change < 500:
  change -= 100
  cnt += 1

while change >= 50 and change < 100:
  change -= 50
  cnt += 1

while change >= 10 and change < 50:
  change -= 10
  cnt += 1

while change >= 5 and change < 10:
  change -= 5
  cnt += 1

while change >= 1 and change < 5:
  change -= 1
  cnt += 1

print(cnt)