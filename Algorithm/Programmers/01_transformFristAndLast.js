// * 배열을 입력받아 차례대로 배열의 첫 요소와 마지막 요소를 키와 값으로 하는 객체를 리턴해야 합니다.

// 주의사항
// 빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다.
// 입력으로 받는 배열을 수정하지 않아야 합니다 ===> push, pop, sort 등의 배열 자체를 변경하는 메서드는 사용하지 않는다.

function transformFirstAndLast(arr) {
    // 입력받은 배열의 첫째 요소와 마지막 요소를 추출한다.
    // 키 : 값의 형태로 빈 객체에 넣는다
    let result = {};
    let newKey = arr[0]
    let newValue = arr[arr.length-1]

    if (arr.length > 0) {
      result[newKey] = newValue;
      // ! 빈 객체/정의되지 않은 객체에 접근하기 위해서는 점 표기법이 아닌 괄호 표기법을 사용해야 한다!
    }

    return result;
  }