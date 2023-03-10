// 비동기를 쓰는 이유는 한줄/한줄 이어지는 자바스크립트의 진행속도가 느리기에
// 여분의 메모리를 사용하여 동시에 작업을 진행하도록 인위적으로 변경시켜주는 작업

// Timer API ===> 직관적인 '시간'의 개념과 가장 유사하기에, 가장 먼저 접하는 개념

// 1. call

// 1. setTimeout(callback, millisecond) ===> milliseond 뒤에 실행
setTimeout(function () {
  // 여기에는 콜백함수
  console.log("1000밀리세컨(1초) 뒤에 실행한다"); // 실행문
}, 1000); // 여기에는 밀리세컨 단위의 대기시작

// 2. clearTimeout(timerId) ===> milliseond 뒤에 종료
const timerTest2 = setTimeout(function () {
  console.log("10000밀리세컨(10초) 뒤에 실행한다");
}, 10000);
clearTimeout(timerTest2); // timerTest2를 종료!

// 3. setInterval (callback, millisecond) ===> 일정 시간을 가지고 함수 반복 실행
// const timerTest3 = setInterval (function () {
//     console.log('1초마다 실행')
// }, 1000);

// 4. claerInterval ===> 일정 시간을 가지고 실행되고 있는 함수의 반복 중지
const timerTest3 = setInterval(function () {
  console.log("1초마다 실행");
}, 1000);
clearInterval(timerTest3);

// 5. 비동기코드를 사용시 유의해야 할 점!
// 개발자는 모든 코드를 예측가능한 방식으로 작성해야 한다!
// but... 비동기코드는 순서에 상관없이 먼저 작업이 완료되는 순서대로 결과가 출력되기에 섬세하게 다뤄져야 한다!
const asyncPrint = function (string, callback) {
  setTimeout(() => {
    console.log(string);
  }, Math.floor(Math.random() * 100));
};

const asyncPrintTest = function () {
  asyncPrint("둥기");
  asyncPrint("방방");
  asyncPrint("포포");
};

asyncPrintTest(); // 왜 이 친구가 있어야지만 실행되는거지???... js는 참 알다가도 모를 친구 같다...
// 동기, 포포, 방방 요 세개가 지 멋대로 출력된다...

// 6. 비동기 제어를 위한 수단 ===> 콜백함수!
const asyncPrint2 = function (string, callback) {
  setTimeout(() => {
    console.log(string);
    callback(); 
  }, Math.floor(Math.random() * 100));
};

const asyncPrintTest2 = function () {
  asyncPrint("둥기", () => {
    asyncPrint("방방", () => {
      asyncPrint("포포", () => {});
    });
  });
};

asyncPrintTest();

// 7. promise
let promise = new Promise((resolve, reject) => {
	// 1. 정상적으로 처리되는 경우
	resolve(value);

	// 2. 에러가 발생하는 경우
	reject(error);
});
