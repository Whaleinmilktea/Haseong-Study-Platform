#### 클래스와 인스턴스

---

##### Class와 Instnace를 사용하는 이유?"

> 1. Class는 Instance를 생산하는 일종의 공장이자, Instance에 따라 일정한 형태를 리턴하는 청사진!
> 2. 구현된 기능을 파악하고 이를 재사용하기 용이하며, 향후 유지보수 및 기능을 추가할 때 생산성이 높다.

```javascript
// Class 기본구문 === MDN 참조 === ES6 최신구문 기준
const NewClass = class { // 클래스 선언 ===> 파스칼케이스 사용 (js의 카멜케이스x)
  constructor() { // 생성자
    this.prop = "value" // 생성자에서 만들어내는 속성과 값
  }
  newMenthod() {
    console.log(this.prop) // "value"
  }
};

let newInstance = new NewClass();
instance.newMethod(); // "value"
```

---

#### 다만, ES7에서 클래스를 생성할 때 상당히 변화된 점들이 있다.
> 1. 생성자 함수 constructor가 사라지고 직접 속성을 정의할 수 있음
> 2. 생성자에서 this 키워드가 사라진 대신, 메서드에서 화살표함수에서 this. 메서드를 사용하여 실행한다.
> 3. 상속관계를 만들기 위한 super() 키워드가 사라졌다.

```javascript
// Class ES7 리팩토링 구문
const Foo = class {
  prop = "value"
  newMethod() {
    return "Hello World!";
  }
};

let instance = new Foo();
instance.bar(); // "Hello World!"
Foo.name; // ""
```