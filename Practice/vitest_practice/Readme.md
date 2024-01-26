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

### TDD
TDD 는 RED → GREEN → REFACTOR 세가지 사이클을 반복하는 일정한 리듬 속에서 진행


