// 1. 자바스크립트는 동기적이다.(synchronus)
// ===> 자바스크립트는 하나하나씩 코드가 실행됨
console.log("동기적으로 작동하는 JS", "1");
console.log("동기적으로 작동하는 JS", "2");
console.log("동기적으로 작동하는 JS", "3");

// 2. 콜백함수 : 나중에 호출할 때 실행하는 함수!
console.log("비동기적으로 작동하는 JS", "1"); // 먼저 출력
setTimeout(() => {
  console.log("2"); // 1초 뒤에 실행
}, 1000);
// ===> callback : 개발자가 정한 시점에 함수가 자동으로 다시 호출되는 것!
console.log("비동기적으로 작동하는 JS", "3"); // 1초 뒤를 기다리지 않고 먼저 실행!

// 동기적 콜백
function printImmdiately(print) {
  // print라는 함수를 매개변수로 전달받아
  print(); //print라는 함수를 출력해줘!
}
printImmdiately(() => console.log("hello"));

// 비동기적 콜백
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(function () {
  console.log("비동기적 콜백(2초뒤 예제)", "async callback");
}, 2000);


// 3. 콜백지옥 예제 ===> 선배 개발자들의 눈물...
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === "haseong" || password === "whaleinmilktea") {
        onSuccess(id);
      } else {
        onError(new Error("no found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "haseong") {
        onSuccess({ name: "haseong", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

// 실행예제(로그인시?)

// const userStorage = new UserStorage();
// const id = prompt("enter your id");
// const password = prompt("enter your password");

// userStorage.loginUser(
//   id,
//   password,
//   (user) => {
//     userStorage.getRoles(user, (userWithRole) => {
//       alert(`Hello ${userWithRole.name} you have a ${userWithRole.role}`)
//     });
//   },
//   (error) => {
//     console.log(error);
//   }
// );
