#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 1157                              :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/1157                           #+#        #+#      #+#     #
#    Solved: 2023/08/28 11:15:50 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
# 빈 딕셔너리 선언
# input_str 순회 중 d 내부 키 체크
# 키 없다면, str[i] : 0 키값 추가 => 문법 모름 => # ? key in dic => True OR False 반환
# 키 있다면, str[i] : 1 count 추가 => 문법 모름 => # ? dic.setdafault()
# 딕셔너리 순회
# 순회 중 최대값이 1개인 경우 : # ?빈 배열에 담아서 len으로 확인 => a[0] 출력
# 순회 중 쵀대값이 2개 이상인 경우 : # ? 빈 배열에 담아서 len으로 확인 => "?"출력

input_str = input().lower()

d = {}
max_count = 0
max_keys = []

for i in input_str:
    if i in d:
        d[i] += 1
    else:
        d.setdefault(i, 0)

max_count = max(d.values())

for key, value in d.items():
    if value == max_count:
        max_keys.append(key)

if len(max_keys) == 1:
    print(max_keys[0].upper())
else:
    print("?")
