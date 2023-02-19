// * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// ! 주의사항
// n은 0 이상 3000이하인 정수입니다.

// ! 입출력 예시
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

function solution(n) {
  let answer = 0;
  for(let i=1; i<=n; i++) { // 2) 자기자신까지 1씩 올려가는 반복문 실행
    if (n%i === 0) { // 1) 단순하게,, n(자기자신)을 1부터 n(자기자신까지)로 나눴을 때 나머지가 0인 수!
      answer += i // 3) 나눠지는 수를 차례로 더하기!
    }
  }
  return answer;
}