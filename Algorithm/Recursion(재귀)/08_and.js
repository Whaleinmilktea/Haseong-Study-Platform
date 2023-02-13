// TODO : 배열을 입력받아 모든 요소의 논리곱(and)을 리턴해야 합니다.

// ! 주의사항
// 함수 and는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 빈 배열의 논리곱은 true 입니다.

// ! 출력예시
// arr[0] && arr[1] && ... && arr[n-1]

function and(arr) {

  if (arr.length === 0) {
    return true;
    // 탈출조건 : 빈 배열의 논리곱 ===> true
    // 빈 배열이 안되는 이유? ===> 출력이 boolean type으로 이뤄져야 하기 때문!
  }

  // [1, 2, 2, 4] ===>
  // 비교 기준점 정하기 ===> arr[0]
  // 만약에 arr[0] 와 arr[1]이 다를 경우? ===> 후 차수의 함수에서 또다시 비교 (arr[1] ?== arr[2]) ===> ...
  let firstEl = arr[0];
  let compareEl = arr.slice(1)

  return firstEl && and(compareEl)
}
