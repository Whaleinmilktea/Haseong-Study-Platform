print('hello world')

# 타입 / 자료형
# 숫자 자료형 : 정수와 실수
x = 1
y = 1
z = 1.2
print( "덧셈", x + y )
print( "뺄셈",  x - y )
print( "곱셈", x * y )
print( "나눗셈", x / y )
print( "제곱", x ** y )
print( "나머지", x % y )

# 문자 자료형
x = "hello"
y = "world"
z = """
hello
world
"""
print(x)
print(y)
print(z)
# 파이썬은 자바스크립트와 달리 형변환이 되지 않는다. => 타입을 맞춰줘야 한다.
# print("너 몇살이니?" + 4) # error
print("너 몇살이니?" + str(4)) # error
print(4 + int("4"))

# 불린 자료형
x = True
y = False
print(x)
print(y)

# 조건문
if 1 > 2:
    print("run")

if not 1 > 2:
    print("run but not print")

if 1 > 0 and 2 > 1:
    print("and")

if 1 > 0 or 2 > 1:
    print("or")

if 1 > 0:
    print("else - if")
else:
    print("else - else")

if x > 0:
    print("elif - if")
elif x == 0:
    print("elif - elif")
else:
    print("elif - else")

# 함수
def chat(name1, name2):
  print("%s : 함수" % name1)
  print("%s : 최고!" % name2)

chat("철수", "영희")

def dsum(a, b):
  result = a + b
  return result

d = dsum(1, 2)
print(d)

def allowAlcohol(age):
  if age < 20:
    print("안돼")
  else:
    print("가능")

# 반복문
# - for : 정해진 횟수만큼 반복
# - while : 정해진 횟수가 없을 때
# break, continue
for i in range(10):
  print(i)

j = 0
while True:
  print("무한루프")
  j += 1
  if j > 10:
    break # 반복문을 끝낸다.

# 자료구조
# 리스트
x = list()
y= []

num_element = len(x)
print(num_element)