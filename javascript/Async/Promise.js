// Udemy Callback 함수 예제

const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (err) => {},
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    // promise의 구상 ;
    // promise는 객체가 생성되는 순간, 내부에 정의된 함수가 즉시 실행되는 특별한 객체이다.
    // 또한 promise 이후에 일어난 일을 .then과 같은 체인 메서드로 정의할 수 있다.
    // 따라서 반복적으로 callback이 일어나는 부분이 어떤 로직 뒤에 일어나는지를 파악하고
    // 해당 로직을 promise 객체로 감싸면 된다.
    setTimeout(() => {
      // setTimeout을 다른 함수에 담아 가독성을 높임!
      resolve("done!");
    }, duration);
  });
  return promise;
};

const trackUserHandler = () => {
  getPosition().then((posData) => {
    console.log(posData);
  });
  setTimer(1000).then(() => {
    console.log('Timer Done!');
  });
  setTimer(0);
  console.log("Getting position...");
};

button.addEventListener("click", trackUserHandler);

// Promise로 리팩토링
