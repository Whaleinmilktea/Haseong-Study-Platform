#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2164                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2164                           #+#        #+#      #+#     #
#    Solved: 2023/08/28 19:09:15 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
from collections import deque

n = int(input())
q = deque()

for i in range(1, n+1):
    q.append(i) # deque([1,2,3,4,5,6])

while len(q) > 1: # 1이랑 같아질 때까지 실행x, 1보다 클 때"만" 실행
    q.popleft()
    pop_value = q.popleft()
    q.append(pop_value)

print(q.pop())