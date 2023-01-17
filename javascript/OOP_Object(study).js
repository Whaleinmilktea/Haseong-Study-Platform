// 객체란? 
// 키(key)와 값(value)로 구성된 집합
// 키(key)와 값(value)으로 구성된 한 쌍을 속성(property)라고 부른다.

// 기본구조
let NewObject = {
    freshKey1 : "newValue1", // 값에는 문자열, 숫자열, 불리언 등 모든 타입이 들어갈 수 있음
    freshKey2 : "newValue2" // 속성이 함수일 경우 ===> 해당 함수를 메서드라고 부름!
}

// 객체에 접근하기 ===> (닷노테이션(dot notation)) 객체이름.key ===> value || (브라켓노테이션(bracket notation)) 객체이름['key'] ===> value
console.log(NewObject.freshKey1); // newValue1
console.log(NewObject['freshKey1']); // newValue1

// 객체에서의 반복문 ===> 반복문과 객체의 범위가 커질 수록 거대한 작업을 할 수 있다!
// 객체 또한 배열과 같이 특수한 반복문을 사용할 수 있다! for...in문!
// 앞서 살펴본 NewObject의 모든 값을 출력하고 싶다면?

for (let i in NewObject) { // 카운트(i)가 진행되는 동안 NewObject안에 있는 속성들을 순환하라!
    console.log(NewObject[i]); // 키에 해당하는 값들을 콘솔 창에 출력하라!
    // console.log(NewObjec['i']가 아닌, [i]가 되어야 한다.. 이유는 모름 ㅠㅠ)
    // "newValue1"
    // "newValue2"
}
