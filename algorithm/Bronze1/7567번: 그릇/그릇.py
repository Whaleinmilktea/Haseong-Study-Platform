#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 7567                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/7567                           #+#        #+#      #+#     #
#    Solved: 2023/12/15 22:15:58 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 그릇 = 같은방향 => 5cm
# 그릇 = 반대방향 => 10cm
# 어떤 문제일까? 단순 += 문제일까?

# def bowls_height(b):
#   l = list(b)
#   cur = l[0]
#   height = 10
#   for i in l[1:]:
#       if i == cur:
#         height += 5
#         cur = i
#       else:
#         height += 10
#         cur = i
#   return height

# bowls = input()
# print(bowls_height(bowls))

#! 최적화 코드
def bowls_height(bowls):
    height = 10  # 초기 높이
    for i in range(1, len(bowls)):
        if bowls[i] == bowls[i-1]:
            height += 5
        else:
            height += 10
    return height

bowls = input()
print(bowls_height(bowls))
