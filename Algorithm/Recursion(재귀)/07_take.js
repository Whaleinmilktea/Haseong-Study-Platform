// TODO : 수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴해야 합니다.

// ! 주의사항
// 함수 take는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).

function take(num, arr) {

  if (num === 0 || arr.length === 0) { // 탈출조건!
    return [];
  }

  let startEl = arr[0]
  let leftEl = arr.slice(0, 1)
  return [startEl].concat(take(num-1, leftEl))
  // array.concat([value1[, value2[, ...[, valueN]]]]) ===> 기존 배열을 해치지 않으면서, 후첨되는 배열을 이어붙일 수 있는 메서드.
  // * 튀어나온 메서드가 무엇인지 항상 고민하기~!
}
