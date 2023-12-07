#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1978                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1978                           #+#        #+#      #+#     #
#    Solved: 2023/08/20 12:47:48 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 에라토스테네스의 체 응용
# 숫자의 범위 필요, 2부터 자기 자신의 배수를 모두 지워서 탐색하는 숫자를 제거
def eratos(start, end):

  l = [i for i in range(start, end+1)]

  for i in range(start, int(end**0.5 + 1)):
    if l[i] != 0:
      for j in range(i*2, end, i):
        l[j] = 0
  primes = [i for i in l if i > 1]
  return primes

print(eratos(1, 100))