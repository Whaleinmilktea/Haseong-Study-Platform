// TODO : 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야 합니다.

// ! 주의사항
// 함수 unpackGiftbox는 재귀함수의 형태로 작성합니다.
// 반복문(for, while) 사용이 "가능"합니다.
// 입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
// 빈 배열 또는 빈 문자열을 입력받은 경우, false를 리턴해야 합니다.

// ['macbook', ['eyephone', [], ['postcard']], 'money'], 'iphone'

// ! 출력
// boolean 타입을 리턴해야 합니다.

function unpackGiftbox(giftBox, wish) {
  for (let i = 0; i < giftBox.length; i++) {
    // gift 박스의 가장 윗 부분에서 wish 품목이 발견되면 좋겠지만,, 그렇지 않을 경우 내부를 까 뒤짚어야 하기 때문에
    if (giftBox[i] === wish) {
      // 가장 위에서 발견할 경우 === true를 정의해주고
      return true;
    } else if (Array.isArray(giftBox[i])) {
      // 안의 박스(배열) 여부를 찾아낸 뒤에
      let unpackInnerBox = unpackGiftbox(giftBox[i], wish); // 동일한 과정 반복! (재귀)
      if (unpackInnerBox === true) {
        return true;
      }
    }
  }

  return false; // 빈 배열, 빈 문자열 등 여러 경우의 수가 false가 되는데, 이를 일일이 정의해주기도 어렵고, 결국 basic case === false인 상태이기 때문에 return false를 기본으로 삼고,,,
}
