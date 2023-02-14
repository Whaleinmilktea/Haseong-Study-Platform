// ! programmers Lv.1 평균 구하기

// ! 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

// ! 입출력예시
//    arr	   return
// [1,2,3,4]	2.5

function solution(arr) {
  let answer = 0;
  // 배열 전체를 순회하기 for of
  // 순회하면서 담긴 변수들에 연산자를 활용하여 합치기
  // arr.length만큼 연산자를 활용하여 나누기

  for (let i of arr) {
    answer += i; // answer = 0, answer+i(1,2,3,4,...) ===> 순회하면서 연산자를 활용하여 합치기!
    // answer/arr.length ===> 여기에 하면 안되는 이유? ===> for문은 순회하면서 실행문 전체를 실행하기 때문! ===> 평균값이 예상과 다를 수 있음!
  }

  return answer/arr.length;
}

// ! 눈에 들어오는 다른 풀이
function otherSolution(arr) {
  return arr.reduce((a,b) => a + b) / arr.length
}

// arr.reduce메서드는 (callback, initalValue) 매개변수를 넣을 수 있다.
// 배열의 최초값은 b에 저장되고, 실행문에 있는 b에 저장된다.
// 순회의 다음 차수에서는 b 실행문에서 리턴된 값이 a에 저장되고, 현재 차수에 해당하는 값이 b에 저장된다.
// 더 이상 요소가 발견되지 않을 때는 실행문에 있는 a + b를 리턴하고 이를 arr.length로 나눠준다.