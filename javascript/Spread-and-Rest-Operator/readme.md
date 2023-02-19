#### 스프레드 연산자

> 1. spread 연산자는 일반적으로 배열 혹은 객체 안에 있는 수많은 값들을 전개 한 뒤 새로운 배열 혹은 객체에 넣어서 활용하기 위한 방법으로 사용된다.
> 2. rest로 쓰일 때는, 전개하고 남은 값들을 특정 변수에 담아 재사용하게 될 경우 활용된다.

---

```javascript
// spread 연산자의 기본구문
// iterator : 순환(for...in / for...of),
let iterableArr = [1, 2, 3, 4];
let iterableObj = { 1: "1", 2: "2", 3: "3", 4: "4" };

myFunction(...iterableObj); // iterable의 값들을 전개하는 연산자
console.log(myFunction); // 1: "1", 2: "2", 3: "3", 4: "4"


const newArr = [...iterableArr, 5, 6] // [1, 2, 3, 4, 5, 6];
const newObj = [...iterableObj, 5:"5", 6:"6"] // { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6" };
```

---

```javascript
// rest로 활용될 경우
function sortArgs(...iterableArr) {
  return iterableArr.sort();
}
```

#### 구조분배할당

---

##### spread와 구조분배할당의 차이점

> 1. spread 연산자가 모든 배열의 요소를 한번에 출력하는 연산자라면, 구조분배할당은 요소 하나하나를 출력하는 연산자.
> 2. 특히, 리액트에서 구조분배할당은 dummy데이터에 있는 수많은 객체를 선별하고 filter할 때 중요하게 사용된다.

```javascript
// destructuring 기본구문 === 출처 : MDN

var a, b, rest;

[a, b] = [10, 20]; // 새로운 배열을 생성한 것이 아닌, a, b를 el로 갖는 배열에 10, 20을 할당한 것!
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 }); // 이 또한 객체를 새로 생성한 것이 아닌, a, b를 prop으로 갖는 배열에 10, 20을 할당한 것!
console.log(a); // 10
console.log(b); // 20

({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```
