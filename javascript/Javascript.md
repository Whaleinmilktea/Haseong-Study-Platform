## 🫥 Javascript

>1. Arrow-function
>2. Class, Instance, prop, method
>3. Destructuring
>4. Async

---

#### 변수 let & const

let : 재할당이 가능한 변수 ===> 반복문/조건문에서 기존 값을 갱신해야 하는 경우에 주로 사용됨<br/>const : 재할당이 불가능한 변수 ===> 주로 함수/특정기능을 선언할 때 사용<br/>var : 새로운 값을 할당할 수 있지만, 맥락에 따라 재할당이 불가능한 변수로도 사용되기에 실제 유지보수에 어려움이 많이 발생하는 변수 (~ES5)

ES6부터 추가된 개념, 구형 브라우저에서는 아직도 var를 많이 사용하고 있기에 알고는 있을 필요가 있다.

---

#### 화살표 함수

```javascript
// Arrow Fuction 기본구문
// 아래의 myFunc1~5는 모두 param을 매개변수로 받고 expression을 실행시키는 동일한 함수이다.

// ----------------- 함수가 1줄로 끝나는 경우 ------------------
const myFunc = param => expression. // 매개변수가 1개인 경우

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

##### **Arrow Fuction의 장점**

1. 코드의 가독성을 높인다. 특히, 리액트와 같은 여러 프로그래밍 언어의 개념이 얽힌 경우, Arrow fuction은 단순 가독성을 넘어 유지보수 및 생산성에도 영향을 미치게 된다.
2. JS에서 this가 가지고 있는 오류를 해결할 수 있다. this는 개발자가 의도한 대로 참조값을 갖지 않는 경우가 꽤나 빈번하다. ===> Arrow function에서 정의한 this는 항상 정의한 객체만을 참조한다.
3.