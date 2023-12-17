#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 9506                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/9506                           #+#        #+#      #+#     #
#    Solved: 2023/12/16 21:48:49 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
while True:
  n = int(input())
  if n == -1:
    break
  end = int(n**0.5)

  def get_measure(num):
      m = [1]  # 1을 적절한 약수로 포함
      for i in range(2, end+1):
          if num % i == 0:
              m.append(i)
              if i != num // i:
                  m.append(num // i)
      m.sort()
      return m

  measures = get_measure(n)

  if sum(measures) == n:
      measures_str = [str(x) for x in measures]
      print(f"{n} = {' + '.join(measures_str)}")
  else:
    print(f"{n} is NOT perfect.")
