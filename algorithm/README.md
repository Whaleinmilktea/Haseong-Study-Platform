## 배열
1. 삽입/삭제 : O(N) => 인덱스를 0~N까지 일일이 접근
2. 탐색 : O(1) => 인덱스를 가지고 메모리의 주소값을 계산하여 접근
3. py : **List** 사용

|인덱스|0|1|2|3|4|5|
|---|---|---|---|---|---|---|
|원소|34|51|삽입/삭제|1|2|8|

## 벡터
1. 삽입/삭제 : O(N)
2. 탐색 : O(1)
3. 동적배열 => 파이썬에서는 그냥 List 사용
```py
v = [] # 튜플
v.append((123, 456))
v.append((789, 987))
print("size", len(v))
for i in v:
  print(i)
```

## 링크드리스트
1. 삽입/삭제 : O(1)
2. 탐색 : O(N)
3. Py에서는 기본 자료구조를 제공하지 않기 때문에, 직접 만들어야 한다.
How?
```py
l_list = {
  kl: {
    next : {
      k2 : {
        ...
      }
    }
  }
  self : 1
}
```
|자기 자신의 값1|다음 노드의 주소값1|(link)|자기 자신의 값2|다음 노드의 주소값2|
|---|---|---|---|---|
- 특정한 인덱스가 없기 때문에, 최악의 경우 탐색을 하려면 전체 노드를 순회해야 함(O(N))
- but. 순서가 없기 때문에, 특정 노드만 안다면 값의 추가가 용이 (O(1))

## 스택
1. py : 리스트로 구현
2. 삽입/삭제 : O(1)
2. FILO(선입후출)
```py
s = []
s.append(123)
s.append(456)
s.append(789)
print("size : ", len(s))
while len(s) > 0:
  print(s[-1]) # 음수를 사용하면 됌!
  s.pop(-1)
```

## 큐
1. py : 덱으로 구현
2. 삽입/삭제(O(1))
3. FIFO(선입선출)
```py
from collection import deque

q = deque()
q.append(123)
q.append(456)
q.append(789)
print("size : ", len(q))
while len(q) > 0:
  print(q.popleft())
```

## 우선순위 큐
1. Heap 알고리즘에 의해 동장
2. 삽입/삭제 : O(logN)
3. py : min-heap을 제공 (root-node에 가장 작은 값)
4. py : heapq로 구현
```py
import heapq as hq

pq = []
hq.heappush(pq, 1)
hq.heappush(pq, 2)
hq.heappush(pq, 3)
hq.heappush(pq, 4)
hq.heappush(pq, 5)
hq.heappush(pq, 6)
print(pq)
while pq:
  print(pq[0])
  hq.heappop(pq)
```

## 맵(딕셔너리)
1. key, value
2. 삽입/삭제 : O(1)
```py
f = {}
f["apple"] = 10
f["banana"] = 20
f["cherry"] = 30
print("size : ", len(f))
for k in m:
  print(k, m[k])
```

## 집합
1. 삽입/삭제 : O(1)
2. py : set
3. 중복을 허용하지 않는 배열(?)
```py
s = set()
s.add(123)
s.add(456)
s.add(789)
s.add(456)
s.add(456)
s.add(123)
s.add(789)
print("size : ", len(s)) #3
for i in s:
  print(i)
```
