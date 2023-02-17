// TODO : 아래와 같이 정의된 피보나치 수열 중 n번째 항의 수를 리턴해야 합니다.
// 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1입니다. 그 다음 2번째 피보나치 수부터는 바로 직전의 두 피보나치 수의 합으로 정의합니다.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// ! 주의사항
// 재귀함수를 이용해 구현해야 합니다.
// 반복문(for, while) 사용은 금지됩니다.
// 함수 fibonacci가 반드시 재귀함수일 필요는 없습니다.

// function fibonacci(n) {
//   if (n === 0 || n === 1) return n; // base case
//   if (n >= 2) {
//     return fibonacci(n-1) + fibonacci(n-2)// recursion case ===> 재귀를 통해 base case에 접근하도록 분할!
//   };
// }

// ! 빅오표기법을 활용한 해결방안
let fibonacci = function (n) {
  const base = [0, 1]; // base case
  const aux = (n) => { // recursive case
    if (base[n] !== undefined) return base[n]; // n이 base 배열에 이미 있다면, 그대로 base[n]을 리턴!
    base[n] = aux(n - 1) + aux(n - 2); //
    return base[n];
  };
  return aux(n);
};

// ? 시간복잡도와 공간복잡도 설명 필요
// ?
