### TDD
TDD 는 RED → GREEN → REFACTOR 세가지 사이클을 반복하는 일정한 리듬 속에서 진행
- 진행과정
1) 아무런 동작을 하지 않는 간단한 컴포넌트 만들기 ```<App />```
2) spec에 따라 test 코드 작성
3) 테스트 실행 =>> 실패(RED)
4) 코드 작성
5) 테스트 실헹 =>> 성공(GREEN)
6) 요구사항변경 & 리팩토링시 =>> 테스트코드 기반으로 리팩토링
: 반복

Why?
- 더 효율적이다 : 특히, unit test && 변경사항

### TDD vs BDD


### Breaking Code - First Component Test
```ts
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App contains correct heading", () => {
  // "@testing-library/react" 시뮬레이션 된 DOM을 리턴한다
  render(<App />);
  // screen 객체로 접근 -> 내부에 어떤 객체가 있는 파악 필요!
  // (/learn react/i) 정규표현식으로 테스트할 경우, 좀 더 유연한 테스트가 가능함!
  const headingElement = screen.getByText(/learn react/i);
  // vitest 구문 -> 일치하는 구문을 찾으면 true 리턴 -> 테스트 성공!
  expect(headingElement).toBeInTheDocument();
});
```

### role 찾기
- RTL(React-testing-library)는 웹 표준의 Role을 따르고 있다.
- WAI-ARIA(Web Accessibility Initiative - Accessible Rich Internet Applications의 약자) :
  - role 속성: 엘리먼트가 수행하는 역할을 지정한다. 예를 들어, 버튼, 링크, 대화 상자 등의 역할을 지정할 수 있다.
  - aria 속성 : 보조 기술에게 추가 정보를 제공한다. 예를 들어, aria-label, aria-describedby, aria-hidden 등이 있다.
- 참조 : [MDN WAI-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types)

### logRoles
- 컴포넌트 렌더링 시, 예상치 못한 오류로 인해 실패할 경우 유용
- console.log()와 같이 직관적이고 단순한 디버깅이 가능!
- 참조 : [docs/dom-testing-library/api-accessibility/#logroless](https://testing-library.com/docs/dom-testing-library/api-debugging/)
```ts
import {logRoles} from '@testing-library/dom'

const nav = document.createElement('nav')
nav.innerHTML = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`

logRoles(nav)
```

