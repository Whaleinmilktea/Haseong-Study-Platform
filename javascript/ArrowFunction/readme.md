#### 화살표 함수

```javascript
// Arrow Fuction 기본구문
// 아래의 myFunc1~5는 모두 param을 매개변수로 받고 expression을 실행시키는 동일한 함수이다.

// ----------------- 함수가 1줄로 끝나는 경우 ------------------
const myFunc = param => expression // 매개변수가 1개인 경우

const myFunc2 = (param) => expression // 매개변수의 수 관계x

const myFunc3 = (param1, paramN) => expression // 매개변수의 수 관계x

// ----------------- 함수가 여러 줄로 끝나는 경우 ------------------
const myFunc4 = param => { // 매개변수가 1개인 경우만 사용가능!
  statements
}

const myFunc5 = (param1, paramN) => { // 매개변수의 수 관계x
  statements
}
```

---

##### **Arrow Fuction의 장점**

1. 코드의 가독성을 높인다. 특히, 리액트와 같은 여러 프로그래밍 언어의 개념이 얽힌 경우, Arrow fuction은 단순 가독성을 넘어 유지보수 및 생산성에도 영향을 미치게 된다.
2. JS에서 this가 가지고 있는 오류를 해결할 수 있다. this는 개발자가 의도한 대로 참조값을 갖지 않는 경우가 꽤나 빈번하다. ===> Arrow function에서 정의한 this는 항상 정의한 객체만을 참조한다.