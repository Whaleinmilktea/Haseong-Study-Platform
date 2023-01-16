// 생활코딩에서의 객체의 인상
// 서로 연관된 변수와 함수 ===> 일정한 이름으로 그룹핑


// 2. 실습준비
console.log('Hello OOP')


// 3. 값을 만들고, 읽기
// ex. 조직의 멤버를 목록화
let memberArray = ['peter', 'john', 'luck']
console.log("memberArray[2]", memberArray[2])

let memberObject = {
  front : 'peter',
  back : 'john',
  middle : 'luck'
}
// memberObject.middle = 'paul'; ===> 수정사항 연습용
// delete memberObject.middle; ===> 제거내용 연습용
console.log("after memberObject['middle']", memberObject['middle'])


// 4. 객체와 반복문
// 여러 개의 데이터를 반복했을 때 거대한 작업을 행할 수 있음
let i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]); // 배열에서의 반복문은 너무나 중요!
  i = i + 1;
}

console.group('object loop')
for (let name in memberObject){
  console.log(name, memberObject[name]); // 객체 대괄호를 꺼내오기?
}
console.groupEnd('object loop')


// 5. built-in, 실제 사용되는 객체의 개념
// 이미 만들어진 객체 및 함수
// 객체 ===> 우리가 이해하기도 전에 익숙한 상태임을 기억하자!
console.log('Math.PI', Math.PI) // ===> 3.1415... ===> 이미 값이 정해진 것 : 객체
console.log('Math.random()', Math.random()) // ===> 무작위수.. ===> 특정 함수가 객체에 내장 : 메서드


// 6.Math와 같은 객체 & 메서드를 만들어보자!
// 객체를 쓰지 않아도 프로그래밍은 정확하게 동작하겠으나, 정리되지 않은 코드가 될 확률이 상당히 높음!
let MyMath = {
  PI: Math.PI,
  random: function() {
    return Math.random();
  },
  floor: function(i) {
    return Math.floor(i);
  }
}
console.log(MyMath.floor(2.5)) // ===> 호출!


// 7. this?
// 프로그래밍에서의 재귀대명사 & 자기 자신을 가리키는 대명사
//   let kim = {
//     name : 'kim',
//     first : 10,
//     second : 20,
//     sum : function () { // ===> kim이라고 하는 사람이 게임을 통해 얻은 스코어의 총합
//       return this.first + this.second;
//     }
//   }
//   console.log('kim.sum()', kim.sum())
// // ===> 상당히 비효율적! why? kim이라고 하는 객체는 이미 f, s 값을 알고 있음에도.. 반복호출
// // ===> 그리하여,, 객체 안에서 "나는", "저는"의 역할을 하는 this를 만듦,,,


// // 8. constructor ===> 생성자
// // 이전에는 객체를 수작업으로 하나하나 만들었다면, 이제는 객체를 찍어내는 공장을 만듦!
// let lee = {
//   name : 'kim',
//   first : 20,
//   second : 20,
//   sum : function () { // ===> kim이라고 하는 사람이 게임을 통해 얻은 스코어의 총합
//     return this.first + this.second;
//   }
// }
// console.log('lee.sum()', lee.sum())
// // 그런데, 만약,,, third : num 속성이 추가되면? kim&lee 모두 바꿔주어야 함!
// // 그래서, 이러한 객체를 찍어내는 공장을 통해 효율성 강화가 필요해짐!


// // 9. 새로운 객체를 생성하는 공장 constructor ===> 생성자2
// // di이라는 공장 ===> year, month, day가 각각 있는 공장을 생산!
// let d1 = new Date('2023-1-14')
// console.log('d1.getFullYear()', d1.getFullYear())
// console.log('d1.getMonth()', d1.getMonth())


// 10. 새로운 객체를 생성하는 공장 constructor ===> 생성자3

// 11, 12 prototype 
// 위에서 각자가 얻은 점수를 비교하는 예시 : kim vs lee
function Person (name, first, second, third) { // 생성자 constructor
  this.name = name;
  this.first = first;
  this.second = second;
  // this.sum = function () {
  //   return this.first + this.second + this.third;
  //   // 이 부분은 잘 만들어진 함수일지라도, 맹점이 있다!
  //   // 각 객체마다 함수가 각각 생성되기에 메모리가 낭비된다! + 객체가 많아질수록 컴퓨터에 부담이 가중된다.
  // }
}

Person.prototype.sum = function () { // 메서드
  return this.first + this.second + this.third;
}
// Person이라는 생성자에서 사용하는 메서드 중 sum이라고 하는 메서드의 함수는 이와 같다! ===> 프로토타입!

let kim = new Person('kim', 10, 20, 30); // kim이라는 이름의 객체

kim.sum = function () {
  return 'this : '+(this.first+this.second);
}

let lee = new Person('lee', 10, 10, 15); // lee라는 이름의 객체
console.log('for prototype kim.sum()', kim.sum());
console.log('for prototype lee.sum()', lee.sum());

// prototype 을 사용하여 재사용성을 높여보자아!

// 13. class ===> 객체지향 프로그램의 핵심 중 핵심!
// constructor function만을 사용하다가 class를 도입!
// 위의 개념과 상동한 개념!

class Person {
  constructor(name, first, second) {
      this.name = name;
      this.first = first;
      this.second = second;
  }
  sum () {
      return this.first + this.second;
  }
}

class PersonPlus extends Person{ // extends + 상속하고자 하는 부모 생성자의 이름 ===> 그 내용을 그대로 가져옴!
  // 만약 third까지 넣어서 합과 평균을 구하고 싶다면?
  constructor(name, first, second, third) {
    super(name, first, second);
    this.third = third;
  }
  sum () {
    return super.sum() + this.third;
  }
  
  avg () {
    return (this.first + this.second + this.third)/3;
  }
}

// 이하는 17. 상속의 개념
// 목적은 다양한 기능을 구현하기 위해 중복하여 다양한 class를 생성하게 되는데,
// 이에 반복되는 코드를 상속의 개념을 통해 줄이는 것!

let kim = new PersonPlus('kim',10,10);

// 18. super : 상속이라는 개념을 도입함으로 인해 발생하는 복잡성을 어떻게 해소하는가?
// 
