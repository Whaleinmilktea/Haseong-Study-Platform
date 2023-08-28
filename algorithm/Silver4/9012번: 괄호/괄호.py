#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 9012                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/9012                           #+#        #+#      #+#     #
#    Solved: 2023/08/28 18:40:06 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
n = int(input())

for _ in range(n):
    just_str = input()
    stk = []
    isVPS = True

    for i in just_str:
        if i == "(":
            stk.append(i)
        else:
            if len(stk) > 0:
                stk.pop()
            else:
                isVPS = False
                break

    if len(stk) > 0:
        isVPS = False

    if isVPS == True:
        print("YES")
    else:
        print("NO")
