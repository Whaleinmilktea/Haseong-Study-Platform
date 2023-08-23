#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 5622                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/5622                           #+#        #+#      #+#     #
#    Solved: 2023/08/23 09:44:25 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
d = {"ABC":3,"DEF":4,"GHI":5,"JKL":6,"MNO":7,"PQRS":8,"TUV":9,"WXYZ":10}
cnt=0
num =input().upper()
for n in num:
    for j in d.keys():
        if str(n) in j:
            cnt +=d.get(j)
print(cnt)