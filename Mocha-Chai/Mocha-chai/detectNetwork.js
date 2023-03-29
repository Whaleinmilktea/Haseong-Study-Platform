/**
 * 아래의 detectNetwork 함수는 어떤 카드 번호를 input으로 받아,
 * 카드 회사의 이름('MasterCard', 'American Express)을 return 하는 함수입니다.
 *
 * 예) detectNetwork('343456789012345') // 'American Express'
 *
 * 그럼 어떻게 카드 번호만 가지고, 카드회사를 알 수 있을까요?
 *
 * 2가지 방법이 있습니다.
 *  1. 앞 자리 숫자들 (이번 과제에서는 prefix라 부릅니다.)
 *  2. 숫자들의 길이 (이번 과제에서는 length라고 부릅니다.)
 */

function detectNetwork(cardNumber) {
  /**
   * 주의사항: 'cardNumber'는 항상 문자열입니다.
   * 'Diner's Club' 카드 번호는 항상 38이나 39로 시작을하고, 14 자리 숫자입니다.
   * 'American Express' 카드 번호는 항상 34 나 37로 시작하고, 15 자리 숫자입니다.
   * 이 글을 읽으셨다면, detectNetwork함수가 'Diner's Club', 'American Express'를
   * 정확히 검사할 수 있도록 만들고 브라우저 console 화면으로 돌아가세요.
   */
  if (
    (cardNumber.length === 14 && cardNumber.startsWith("38")) ||
    (cardNumber.length === 14 && cardNumber.startsWith("39"))
  ) {
    return "Diner's Club";
  } else if (
    (cardNumber.length === 15 && cardNumber.startsWith("34")) ||
    (cardNumber.length === 15 && cardNumber.startsWith("37"))
  ) {
    return "American Express";
  } else if (
    (cardNumber.length === 19 && cardNumber.startsWith("4")) ||
    (cardNumber.length === 13 && cardNumber.startsWith("4")) ||
    (cardNumber.length === 16 && cardNumber.startsWith("4"))
  ) {
    return "Visa";
  } else if (
    cardNumber.startsWith("51") ||
    cardNumber.startsWith("52") ||
    cardNumber.startsWith("53") ||
    cardNumber.startsWith("54") ||
    cardNumber.startsWith("55")
  ) {
    return "MasterCard";
  } else if (
    (cardNumber.startsWith("6011") || // * 해당 조건식을 따로 함수로 정의하면, 그것대로 간단할듯!!! ㄱㅅ
      cardNumber.startsWith("65") ||
      cardNumber.startsWith("644") ||
      cardNumber.startsWith("645") ||
      cardNumber.startsWith("646") ||
      cardNumber.startsWith("647") ||
      cardNumber.startsWith("648") ||
      cardNumber.startsWith("649")) &&
    (cardNumber.length === 16 || cardNumber.length === 19)
  ) {
    return "Discover";
  }
}

// you don't have to worry about this code. keep this code.

if (typeof window === "undefined") {
  module.exports = detectNetwork;
}

const arr1 = [6011, 65, 644, 645, 646, 647, 648, 649]
cardNumber.length

for (let i of arr1) {

}