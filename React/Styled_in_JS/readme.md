### Styled Component

> 1. React는 기능구현에 초점을 둔 라이브러리이기 때문에, 종전의 스타일링은 전적으로 CSS파일에 의존했다.
> 2. 그러나 웹에서의 상호작용이 비대화되고, React프로젝트가 거대화 됨에 따라 CSS파일 또한 다양화되었다.
> 3. 이로 인해 SASS나 Styled Component와 같은 방법론이 등장했다.

#### 각각의 방법론은 장/단점을 갖고 있다.
> 1. SASS
> 장점 : 변수/함수/상속 개념을 활용하여 재사용이 가능하고, CSS가 구조화되어 유지보수가 편리하다
> 단점 : 별도의 전처리 과정이 필요하고, 디버깅하는데 어려움이 있으며, 컴파일한 CSS가 거대화되는 문제가 있다.

> 2. Styled-Component
> 장점 : CSS가 컴포넌트 안으로 캡슐화되어서 네이밍이나 최적화를 신경쓸 필요가 없다.
> 단점 : 빠른 페이지 렌더링에서 불리함을 갖고 있다.(컴포넌트 자체가 CSS를 갖게 됨으로 인함)

---

### Styled Component 시작하기

```bash
$ npm install --save styled-components # npm으로 간단히 설치할 수 있다.
```
```javascript
// package.json에 추가
// 아래의 내용은 Styled Component가 설치됨으로 인해 발생하는 예기치 못한 오류를 최소화한다.
// Styled Component 개발팀 제안
{
  "resolutions": {
    "styled-components": "^5"
  }
}
```
```javascript
// 이후 사용하길 원하는 컴포넌트에 import하면 환경설정은 완료된다.
import styled from "styled-components"
```

---

### 기본문법

#### 1. 각 컴포넌트에 스타일 정의하기 +a/ 각 컴포넌트에 스타일을 정의해 준 뒤, 복붙과 작은 네이밍 센스를 통해 재사용이 용이하다!

```javascript
// 컴포넌트를 정의 = styled.태그종류를 정의해주고, 백틱안에 css 속성 : 속성값을 넣어주기!
const 컴포넌트 이름 = styled.태그종류`
  css속성 : 속성값
  `
```

#### 2. props를 활용하여 속성을 상속할 수도 있다.

```javascript
// 속성값
const 컴포넌트 이름 = styled.태그종류`
  css속성 : ${ (props) => {함수코드} }
  `
```

#### 3. 각 컴포넌트가 아닌 전역으로 스타일을 정의해 줄 수도 있다.
```javascript
const GlobalStyle = createGlobalStyle`
	html엘리먼트 {
		CSS 속성 : 속성값
	}
`

function App () {
  return (
    <div>
      <GlobalStyle />
      <html엘리먼트></html엘리먼트>
    </div>
  )
}
```
