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
