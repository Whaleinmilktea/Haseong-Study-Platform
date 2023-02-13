// * 배열을 입력받아 모든 요소의 합을 리턴해야 합니다.

// ! 주의사항
// 함수 arrSum은 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability). ===> push, pop, shift, unshift, sort 사용 불가
// 입력으로 들어오는 arr의 모든 요소는 정수 값을 갖는다고 가정합니다.
// 빈 배열의 합은 0 입니다.

  // 재귀탈출 조건 : arr.length === 0 일 경우 재귀 탈출
  // [ 1, 2, 3, 4 ] ===> arr
  // ===> 1 + [2, 3, 4] ===> arr.slice(0,1) + arr.slice(1)
  // ===> 1 + 2 + [3, 4] ===> arr.slice(1,2) + arr.slice(2)

function arrSum(arr) {

  if (arr.length === 0) {
    return 0;
  }

  const startNum = arr[0];
  const leftNum = arr.slice(1);

  return startNum + arrSum(leftNum);
}
