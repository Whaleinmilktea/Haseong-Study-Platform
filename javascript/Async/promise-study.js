// 콜백지옥을 탈출하자!

// promise (js자체 제공)
// ===> 약속(무엇을?) 일정 시간이 지난 뒤(비동기 설정에 따라..) 실행해주는 "객체!"
// ===> 정상적인 실행 ===> 성공메세지 + 결과값
// ===> 에러 발생시? ===> error

// ! 핵심1 ===> state : pending -> fulfilled or rejected
// ! 핵심2 ===> producer(데이터를 제공하는 사람) vs consumer(데이터를 소비하는 소비자)

// 1. producer
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, readfile.. etc)
    // 새로운 new Promise ===> executor가 바로 실행된다.
    console.log('doing something...')
    setTimeout(() => {
       resolve('resolve의 값'); // * (2) resolve라는 콜백함수를 실행시켜줘!
    //    reject(new Error('no network')) // * (if..3) 
    }, 2000) // *(1) 2초 뒤에
});

// 2. Consumer: then, catch, finally
// * (1) promise가 정상적으로 수행된다면,,(then)
promise//
.then((value) => {
    // * (2) 나는 value라는 값을 받아올거야
    console.log(value);
    // * (3) 실제 출력은 value가 아닌, 'resolve의 값'이 출력되는데,,, 그 이유는?
    // * (4) promise의 resolve라는 콜백함수가 2초 뒤에 'haseong'이라는 값을 전달하기 때문에!
    // * (if..5) .then은 promise를 그대로 호출하기 때문에,
})
.catch((error) => { // *(if..6) 리턴된 promise에 .catch 메서드를 적용!
    console.log(error);
})
.finally(() => {
    console.log('finally')
});

// 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); // * (1) 성공적으로 수행할 시.. => 1전달
})

fetchNumber
.then(num => num *2) // * (2) num으로 값을 전달받아 *2 ===> 2
.then(num => num *3) // * (3) num으로 다시 그 값을 전달받아 *3 ===> 6
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num -1), 1000) // * (4)num으로 값을 전달받은 뒤 -1 ===> 5
    })
})
.then(num => console.log(num));