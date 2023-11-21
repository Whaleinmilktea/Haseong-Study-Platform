#  **************************************************************************  #
#                                                                              #
#                                                       :::    :::    :::      #
#    Problem Number: 25501                             :+:    :+:      :+:     #
#                                                     +:+    +:+        +:+    #
#    By: shaawwert6044 <boj.kr/u/shaawwert6044>      +#+    +#+          +#+   #
#                                                   +#+      +#+        +#+    #
#    https://boj.kr/25501                          #+#        #+#      #+#     #
#    Solved: 2023/09/26 22:13:47 by shaawwert6044 ###          ###   ##.kr     #
#                                                                              #
#  **************************************************************************  #
import sys
input = sys.stdin.readline
n = int(input())

def isPalin(s):
  return check_Char(s, 0, len(s)-1)

def check_Char(s, b_char, r_char):
  global count # ?
  count += 1

  if (b_char >= r_char): return 1
  elif (s[b_char] != s[r_char]): return 0
  else: return check_Char(s, b_char+1, r_char-1)

for _ in range(n):
  s = input().strip()
  count = 0
  print(f"{isPalin(s)} {count}")