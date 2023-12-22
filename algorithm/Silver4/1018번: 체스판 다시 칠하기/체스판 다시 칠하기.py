# #  **************************************************************************  #
# #                                                                              #
# #                                                       :::    :::    :::      #
# #    Problem Number: 1018                              :+:    :+:      :+:     #
# #                                                     +:+    +:+        +:+    #
# #    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
# #                                                   +#+      +#+        +#+    #
# #    https://boj.kr/1018                           #+#        #+#      #+#     #
# #    Solved: 2023/12/22 21:18:30 by shaawwert6044 ###          ###   ##.kr     #
# #                                                                              #
# #  **************************************************************************  #
n, m = map(int, input().split())
board = []
cnt = []

for _ in range(n):
    board.append(input())

for a in range(n-7):
    for b in range(m-7):
        repaint1 = 0
        repaint2 = 0
        for i in range(a, a+8):
            for j in range(b, b+8):
                if (i+j) % 2 == 0:
                    if board[i][j] != 'W': # 흰색이 아닐 경우
                        repaint1 += 1
                    if board[i][j] != 'B': # 검은색이 아닐 경우
                        repaint2 += 1
                else:
                    if board[i][j] != 'B': # 검은색이 아닐 경우
                        repaint1 += 1
                    if board[i][j] != 'W': # 흰색이 아닐 경우
                        repaint2 += 1
        cnt.append(min(repaint1, repaint2))

print(min(cnt))