// TODO : 배열을 입력받아 모든 요소의 논리합(or)을 리턴해야 합니다.

// ! 주의사항
// 함수 or는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 빈 배열의 논리합은 false 입니다.

// ! 출력
// arr[0] || arr[1] || ... || arr[n-1]

function or(arr) {
  if (arr.length === 0) {
    // 탈출조건(basic case)
    return false;
  }

  // 비교대상 설정 : arr[0]
  let firstEl = arr[0];
  let compareEl = arr.slice(1);

  return firstEl || or(compareEl);
}
