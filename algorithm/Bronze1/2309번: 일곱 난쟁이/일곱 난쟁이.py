#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 2309                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/2309                           #+#        #+#      #+#     #
#    Solved: 2023/10/11 22:00:29 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 입력받은 후 리스트에 저장
# 리스트의 총합 sum()
# 리스트 순회 = 두 수의 합 체크 === sum() - 100
# 리스트에서 제외한 후 출력
m_list = []
a = 0
b = 0

for _ in range(9):
  m_list.append(int(input()))

left_age = 100-sum(m_list)

for i in range(len(m_list)-1):
  for j in range(len(m_list)-2):
    if m_list[i] + m_list[j+1] == left_age:
      a = i, b = j

# m_list.pop(m_list[i])
# m_list.pop(m_list[j])

print(m_list)