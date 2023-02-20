### map 메서드

> 1. .map()은 callback 함수에 각각의 el을 집어넣어 **함수가 적용되어 반환되는 값들로 새로운 배열**을 만드는 메서드
> 2. dummy데이터 혹은 fetch로 받아온 값들을 새로운 값으로 만들어 배열로 반환할 때 사용될 수 있다.

```javascript
// MDN try 예제
const array1 = [1, 2, 3, 4];
const map1 = array1.map(x => x * 2); // map1 === 주어진 arr의 el들에 *2한 값들을 새로운 요소로 갖는 배열
console.log(map1); // Array [2, 8, 18, 32]
```

---

### find 메서드

> 1. .find()는 callback 함수에 각각의 el을 집어넣어 **함수에 명시된 조건/함수가 만족하는 첫 번째 요소의 값**을 반환
> 2. dummy데이터 혹은 fetch로 받아온 값들 중 원하는 조건에 해당하는 값을 찾을 때 유용할 수 있다.

```javascript
// MDN try 예제
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10); // 주어진 arr에서 el들 중 함수가 만족한 첫번째 값!
console.log(found); // 12
```
---

### findIndex 메서드

> .findIndex()는 callback 함수에 각각의 el을 집어넣어 **함수에 명시된 조건/함수가 만족하는 첫 번째 요소의 인덱스**을 반환

```javascript
// MDN try 예제
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13; // findIndex에 콜백(현 상황에서는 조건)으로 주어질 함수
console.log(array1.findIndex(isLargeNumber)); // 콜백함수가 만족하는 값의 "인덱스"
```
---

### findIndex 메서드

> .findIndex()는 callback 함수에 각각의 el을 집어넣어 **함수에 명시된 조건/함수가 만족하는 첫 번째 요소의 인덱스**을 반환

```javascript
// MDN try 예제
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13; // findIndex에 콜백(현 상황에서는 조건)으로 주어질 함수
console.log(array1.findIndex(isLargeNumber)); // 콜백함수가 만족하는 값의 "인덱스"
```

