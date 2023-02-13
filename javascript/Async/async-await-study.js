// async & await
// 깔끔하게 promise를 사용할 수 있는 방법!
// async & await를 사용할 수 있는 경우 vs promise를 사용하는 경우!

// 1. async
async function fetchUser() { // * 호출하면 사용자의 이름을 받아오는 함수
    // * (1) 원래 비동기 처리를 하려면 함수 안에 new promise((resolve, reject) => {})
    // * 넣어 주어야 했지만,,
    // * async을 함수 앞에 넣어주면 비동기적으로 자동대로 즉시 실행됨!
    // 10초 정도 걸리는 작업이라 가정
    return 'haseong'
}

const user = fetchUser() ; // * (1) 함수의 호출
user.then(console.log)
// ? 변수를 선언해서 할당한다는 개념 때문에 const user = fetchUser()가 직관적으로 와닿지 않음;
// * (2) 비동기적인 처리가 전무한 경우 user는 사용자의 이름을 받아올 떄까지 10초를 마냥 기다릴 수 밖에 없음
console.log(user);

// 2. await ===> 일단 대기...
