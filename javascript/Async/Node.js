// Node.js는 내장모듈!

// Node.js에서 내장 모듈을 불러오는 방법
const fs = require('fs'); // 파일 시스템 모듈 불러오기
const dns = require('dns'); // DNS 모듈 불러오기

// Node.js에서 서드파티 모듈을 불러오는 방법
npm install underscore // underscore 모듈을 npm을 통해 web에서 불러오기
===> // 이후에
const_ = require('underscore'); // 서드파티 모듈 불러오기

// fs.readFile
fs.readFile(path, option, callback) // path, option, callback이라는 3개의 전달인자를 받음
// path ===> '경로' (일반적으로 문자열)
// option(optional) ===> 문자열 or 객체 / 인코딩방식 ex. utf8
// callback ===> 콜백함수를 전달 ex. (err, data) => {
//     if(err) {
//         throw err;
//     }

fs.readFile('test.txt', 'utf-8', (err, data) => {
    if(err) {
        throw err; // 만약에 에러가 뜰 경우,
    }
    console.log(data); // data를 출력해라.
});