// TODO : 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.

// ! 주의사항
// 함수 flattenArr는 재귀함수의 형태로 작성합니다.
// Array Method flat()과 flatMap() 사용은 금지됩니다.
// 반복문(for, while) 사용이 가능합니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 입력으로 전달되는 다차원 배열이 중첩된 정도(중첩의 깊이)는 정해져 있지 않습니다.
// 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

// ! 출력
// 배열을 리턴해야 합니다.

function flattenArr(arr) {

  if (arr.length === 0) { // 빈 배열일 경우 리턴!
    return [];
  }

  let firstEl = arr[0] // 재귀 및 비교의 기준점
  let leftEl = arr.slice(1) // 나머지 요소

  if (Array.isArray(firstEl)) { // 만약 첫번째 요소가 중첩된 배열이라면?
    return flattenArr([...firstEl, ...leftEl]) // 첫번째 요소를 spread한 배열을 갖고 다시 비교!
  } else {
    return [firstEl].concat(flattenArr(leftEl))
  }
}
