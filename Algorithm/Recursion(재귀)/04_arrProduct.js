// TODO : 배열을 입력받아 모든 요소의 곱을 리턴해야 합니다.

// ! 주의사항
// 함수 arrProduct는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 입력으로 들어오는 arr의 모든 요소는 정수 값을 갖는다고 가정합니다.
// 빈 배열의 곱은 1 입니다.

// 탈출조건(basic case) ===> arr.length === 0
// [1 ,2, 3, 4] ===>

function arrProduct(arr) {
  if (arr.length === 0) {
    return 1;
  }

  let firstNum = arr[0]
  let leftNum = arr.slice(1)
  return firstNum * arrProduct(leftNum); // * 재귀함수를 사용할 때에는 다시 전달해주는 매개변수에 신경을 써보자!
}
