// 객체란? 
// 키(key)와 값(value)로 구성된 집합
// 키(key)와 값(value)으로 구성된 한 쌍을 속성(property)라고 부른다.

// 기본구조
let NewObject = {
    freshKey1 : "newValue1", // 값에는 문자열, 숫자열, 불리언 등 모든 타입이 들어갈 수 있다
    freshKey2 : "newValue2" // 속성이 함수일 경우 ===> 해당 함수를 메서드라고 부른다
}

// 객체에 접근하기 ===> (닷노테이션(dot notation)) 객체이름.key ===> value || (브라켓노테이션(bracket notation)) 객체이름['key'] ===> value
console.log(NewObject.freshKey1); // newValue1
console.log(NewObject['freshKey1']); // newValue1