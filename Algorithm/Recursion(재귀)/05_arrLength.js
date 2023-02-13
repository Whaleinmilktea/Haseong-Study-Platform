// TODO : 배열을 입력받아 그 길이를 리턴해야 합니다.

// 함수 arrLength는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability). ===> 기본 배열 변경x
// arr.length 사용은 금지됩니다.
// arr.isEmpty()를 통해 배열이 비어있는지 확인할 수 있습니다.
// 해당 메소드는 표준 자바스크립트 내장 메소드가 아니며, 문제를 위해 새롭게 정의된 커스텀 메소드입니다. 이 문제에서만 사용하시길 바랍니다.
// [ ].isEmpty() === true , [1, 2].isEmpty() === false
// 빈 배열의 길이는 0입니다.

// 탈출조건 : 배열에 아무런 요소가 없는 경우
// 길이 === 카운트 ===> 카운트방법

// [ 1, 2, 3, 4] ===> 4
// 1 + [2, 3, 4] ===> arrLength // 1 + leftArr
// 2 + [3 , 4] ===> arrLength // 1 + leftArr

function arrLength(arr) {
  if (arr.isEmpty() === true) {
    return 0;
  }

  const leftArr = arr.slice(1);
  return 1 + arrLength(leftArr);
}
