// ? class constructor(생성자) 기초

// TODO : 생성자 함수 선언 및 속성/메서드 넣기
class Person {
  // class의 이름을 선언하는 일종의 함수
  constructor() {
    // class가 호출되었을 때에 실행되는 생성자 함수
    this.name = "haseong"; // 생성자가 생성하는 객체의 "속성( === 키:값)"
  }
  printMyName() {
    // class의 메서드 : 생성자에 특별한 기능을 넣어서, 동일한 기능을 반복하여 작성하지 않아도 실행될 수 있도록 미리 정의한 함수
    // class와 함께 호출되었을 때에 실행!
    console.log("클래스 안에 명시된 메서드 실행 : " + this.name);
  }
}

// TODO : 생성자 함수를 호출하고, 메서드를 실행하기
// haseong이라는 객체는 Person이라는 생성자를 기반으로 생성됨(키:값을 가져옴)
const personOfClass = new Person();
// 새롭게 생성된 personOfClass라는 객체를 활용하여, class안에 명시된 printMyName이라는 메서드를 실행시킴!
personOfClass.printMyName(); // 클래스 안에 명시된 메서드 실행 : haseong

// ? class constructor(생성자) extends
// TODO : extends로 상속관계(Human > Person) 연결하기
class Human {
  constructor() {
    this.gender = "male"; // personOfClass2.printMygender(); ===> "male"
  }
  printMygender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  // extends : 상속관계를 만들기 위한 키워드 ===> Human의 속성과 메서드를 가져오기 위함
  constructor() {
    super(); // super() : 상속관계를 만들기 위한 메서드 : Human의 속성과 메서드를 가져오기 위함
    this.name = "haseong";
    this.gender = "female"; // personOfClass2.printMygender(); ===> "female"
  }
  printMyName() {
    console.log("클래스 안에 명시된 메서드 실행 : " + this.name);
  }
}

// TODO : 생성자 함수를 호출하고, 메서드를 실행하기
const personOfClass2 = new Person();
personOfClass2.printMyName();
personOfClass2.printMygender();

// ? ES7 차세대 자바스크립트에서 class가 갖는 특징들
// 1) 생성자 함수 constructor가 사라지고 직접 속성을 정의할 수 있음
// 2) 생성자에서 this 키워드가 사라진 대신, 메서드에서 화살표함수를 사용하여 실행!
// 3) 상속관계를 만들기 위한 super() 키워드가 사라짐

// TODO : ES7 형식으로 리팩토링
class Human {
  gender = "male";

  printMygender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "haseong";
  gender = "female";

  printMyName = () => {
    console.log("클래스 안에 명시된 메서드 실행 : " + this.name);
  };
}

// TODO : 생성자 함수를 호출하고, 메서드를 실행하기
const personOfClass3 = new Person();
personOfClass2.printMyName();
personOfClass2.printMygender();
