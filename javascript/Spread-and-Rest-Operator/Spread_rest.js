// TODO : 기본 배열에서의 전개 구문
const numbers = [1, 2, 3];
const notNumbers = [numbers, 4] // spread 문법을 넣지 않을 경우
const newNumbers = [...numbers, 4] // spread 문법을 넣을 경우

console.log(notNumbers); // [[1, 2, 3], 4]
console.log(newNumbers); // [1, 2, 3, 4]

// TODO : 기본 객체에서의 전개 구문
const person = {
  name : "haseong"
};
const notPersonDetail = {
  person,
  age : "28"
};
const personDetail = {
  ...person,
  age : "28"
};

const jsonNotPeronDetail = JSON.stringify(notPersonDetail)
const jsonPeronDetail = JSON.stringify(personDetail)
// 객체는 사람이 보기에는 key1: "value1", key2: "value2"가 문자열처럼 묶인 것처럼 보이지만,
// 실제 브라우저에서는 Object객체에 내장된 toString() 메서드가 작동하여 보여진다.
// 객체를 기반으로 데이터를 주고받는 JSON타입으로 변환해야하며, 특히 사람이 읽을 수 있는 string타입으로 변환해야 하기에,
// JSON.stringify() 메서드를 활용하여 객체의 값을 변환해야 한다.

console.log(jsonNotPeronDetail); // {{name : "haseong"}, age : "28"}
console.log(jsonPeronDetail); // {name : "haseong", age : "28"}

// TODO : 함수에서의 rest 연산자
const oneFilter = (...args) => { // args에는 임의의 배열이 들어감 (매개변수에 ...args를 쓰는 이유는, 배열이 아닌 임의의 값들을 배열처럼 쓰기 위함!)
  return args.filter(el => el === 1); // 그 중 filter메서드에서 1과 동일한 요소만을 출력하도록 조건을 넣음
}

console.log(oneFilter(1, 2, 3)); // [1]
