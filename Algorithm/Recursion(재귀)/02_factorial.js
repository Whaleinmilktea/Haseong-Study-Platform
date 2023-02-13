// * 임의의 자연수 num 까지의 모든 자연수의 곱
// * 재귀함수를 활용하여 문제 해결

// num = 5
// 5! = 5 x 4 x 3 x 2 x 1
// === 5 x 4!(factorial 함수는 끊임없이 자기 자신을 호출하는 함수!)
// === 5 x 4 x 3!
// === ...

function fac(num) {
    if (num === 1) {
      return 1; // 쪼갤 수 없는 최소 단위 (basecase) === 재귀의 탈출조건
    }

    return num * fac(num-1)
}

// * 함수의 동작 방법
// fac(4) ===> 조건 : 4 !== 1 ===> return 4 * fac(3)
    // fac(3) ===> 조건 : 3 !== 1 ===> return 3 * fac(2)
        // fac(2) ===> 조건 : 2 !== 1 ===> return 2 * fac(1)
            // fac(1) ===> 조건 : 1 === 1 ===> return 1