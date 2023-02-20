### JSX

> 1. JSX의 코드 그 자체로는 브라우저에서 읽어들일 수 없다. 이로 인해 `babel`이라는 컴파일러는 사용하게 된다.
> 2. 중간 렌더링 툴이 필요할만큼 복잡한 JSX가 필요한 이유는, 개발상 용이성 때문이다!

```HTML
    <div>
      <h2>Hello React!</h2>
    </div>
```

#### 흔히 볼 수 있는 위의 h2 밑에 "I want to be a developer who increases value"라는 내용을 갖는 <p> 태그를 JS를 활용하여 추가하기 위해서는<br/>다음과 같은 2가지 방식이 있다.

```javascript
// ./App.js
// * JS DOM으로 구현한 코드
const para = document.createElement("p");
para.textContent = "I want to be a developer who increases value";
document.getElementById("root").append(para);
```

---

```javascript
// ./App.js
// * JSX로 구현한 코드
return (
  <div>
    <h2>Hello React!</h2>
    <p>I want to be a developer who increases value</p>
  </div>
);
```

#### 직접 작성해보니.. 그 차이를 알 수 있다!

---

### JSX 작동방식

> JSX는 선언적으로 프로그래밍한다!
>
> 1. 선언적 작동방식 : 기능을 구현하기 위해 (react에서는 목표로 하는 상태에 도달하기 위해) 달성 과정에 있어서 "필요한 상태"들을 기술하는 방식
> 2. 명령적 작동방식 : 기능을 구현하기 위해 (react에서는 목표로 하는 상태에 도달하기 위해) 달성 과정 전반을 기술(프로그래밍)하는 방식

---

### JSX 기본문법

> JSX는 선언적으로 프로그래밍한다!

```javascript
const Component = () => {
  // 함수 선언 (컴포넌트의 기능을 선언)
  return (
    // return () : 실제 컴파일링이 될 컴포넌트의 내용을 인자로 전달
    <div>contents</div>
  );
};
```

---

### JSX 규칙

1. JSX 내부에 여러 엘리먼트를 작성할 경우 최상위에서 `<div>`로 감싸주어야 한다.

```Javascript
const Component = () => {
  return (
    <div>
      <h1 className = "btn">contents1</h1>
      <p>contents2</p>
    </div>
  )};
```

2. React에서 여러 개의 HTML 엘리먼트를 활용하고자 할 때는 `map()` 함수를 이용한다.
```Javascript
const dummy = [
  {id : 1, title : "agree", content : "hello"}
  {id : 2, title : "disagree", content : "bye"}
]

const Component = () => {
  const content = dummy.map(el) => { // for of 처럼 각 객체를 순회하며 데이터를 담을 el 변수를 선언해서 map함수를 실행
    <div key = {el.id}>
      <p>{el.title}</p>
      <p>{el.content}</p>
    </div>

  return (
    <div>
      {content}
    </div>
  )
  }

```

3. css class 속성을 지정하려면 className으로 지정해야 한다

```HTML
<!-- HTML에서의 class 지정 -->
<div>
  <h1 class = "btn">contents1</h1>
  <p>contents2</p>
</div>
```

```Javascript
const Component = () => {
  return (
    <div>
      <h1 className = "btn">contents1</h1>
      <p>contents2</p>
    </div>
  )};
```

4. JSX 중간에 자바스크립트를 사용하려면 중괄호 `{}`를 이용해야 한다.
```Javascript
const Component = () => {

const name = "haseong";

return (
  <div>
    <h1 className = "name">My name is {name}</h1>
  </div>
)};
```

5. 컴포넌트는 대문자로 시작해야 한다! (파스칼케이스) ===> JSX로 작성된 컴포넌트 : 사용자 정의 컴포넌트

6. 조건문에서는 if문이 아닌 삼항연산자를 이용한다.
```Javascript
// 삼항연산자 기본문법
function operator (age) {
  (age > 20) ? (<p>구매가능</p>) : (<p>구매불가</p>)
  // (a+b > age) ===> if (age > 20)
  // ? (<구매가능>) ===> {return <p>구매가능</p>}
  // : (<p>구매불가</p>) ===> {return <p>구매불가</p>}
}
```
```Javascript
const Component = () => {

let age = 28;

return (
  {(age > 20) ? (<p>구매가능</p>) : (<p>구매불가</p>)}
)};
```


