#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 15649                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/15649                          #+#        #+#      #+#     #
#    Solved: 2023/11/23 15:52:57 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 첫번째 수를 선택한다
    # 두번째 수를 선택한다.
        # ... m만큼 반복
            # 결과를 기록한다.
# 선택한 수를 초기화한다.
import sys
input = sys.stdin.readline

n, m = map(int, input().split(" "))
visited = [False] * n
result = []

def sol(k, n, m):
    if k == m:
        print(*result)
        return

    for i in range(0, len(visited)):
        if not visited[i]:
            visited[i] = True
            result.append(i+1)
            sol(k+1, n, m)
            visited[i] = False # 초기화코드
            result.pop() # 초기화코드

sol(0, n, m)