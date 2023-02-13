// TODO : 수를 입력받아 홀수인지 여부를 리턴해야 합니다.

// ! 주의사항
// 함수 isOdd는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
// 0은 짝수로 간주합니다.

// ! 출력
// boolean 타입을 리턴해야 합니다.

function isOdd(num) {
  // basic case
  if (num === 0) {
    return false;
  } else if (num === 1) {
    return true;
  }

  // 재귀반복하다가, 만약 0 또는 1이 되었을 때 ===> 최종 값 리턴
  if (num < 0) {
    return isOdd(-num) // 음수의 경우는 양수로 바꿔서 판별
  } else {
    return isOdd(num-2) // 2씩 빼다가 0이 되면 짝수, 1이 되면 홀수
  }
}