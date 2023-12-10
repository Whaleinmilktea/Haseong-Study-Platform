#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 10811                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/10811                          #+#        #+#      #+#     #
#    Solved: 2023/12/11 02:13:41 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
n, m = map(int, input().split(" "))
b = [x for x in range(1, n+1)]

for _ in range(m):
  i, j = map(int, input().split(" "))
  # sorted를 사용하면 안되는 이유 = 값에 상관없이 인덱스만 바꿔야 함
  b[i-1:j] = reversed(b[i-1:j])

print(" ".join(map(str, b)))