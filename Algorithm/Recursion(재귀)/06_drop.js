// TODO : 수(num)와 배열을 입력받아 차례대로 num개의 요소가 제거된 새로운 배열을 리턴해야 합니다.

// ! 주의 사항
// 함수 drop은 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// ? num과 arr.length 중 최소값만큼 제거합니다. ===> 최소값만큼 제거??가.. 뭘까?

// 2 , [ 1, 2, 3, 4]
// (1) drop ===> 0번째 요소 ===> [2, 3, 4]
// (1) drop ===> 0번째 요소 ===> [3, 4]

function drop(num, arr) {
  // 탈출조건 : num > arr.length보다 클 때! ===> // ? 이 식은 왜 적용이 안되는거지?
  // if (num >= arr.length) {
  //   return [];
  // }

  if (num === 0 || arr.length === 0) {
    return arr;
  }

  let result = arr.slice(1)
  return drop(num-1, result)
}
