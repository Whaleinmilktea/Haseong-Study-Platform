#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2577                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2577                           #+#        #+#      #+#     #
#    Solved: 2023/08/19 14:28:50 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
a = int(input())
b = int(input())
c = int(input())
r = list(str(a*b*c))

# for i in range(10):
#   print(r.count(str(i)))

# 의사코드
# 인덱스는 ++
# 반복되는 로직 : 리스트에서 인덱스에 해당하는 값을 count한 뒤 print

# 모든 반복문은 재귀로 변환할 수 있다!
def solution(l, index):
  # 종료조건
  if index >9:
    return
  # 실행로직
  print(l.count(str(index)))
  # 재귀호출
  solution(l, index+1)

solution(r, 0)