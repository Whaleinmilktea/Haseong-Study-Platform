### 리액트 프로젝트 시작하기

> 1. React는 라이브러리이다.
> 2. React로 개발한 모든 어플리케이션은 JS로도 구현이 가능하다.
> 3. 그럼에도 불구하고, React를 쓰는 이유는 다양한 도구(js코드의 집합===>명령어/태그 등)들을 통해 어플리케이션 자체에 집중할 수 있고, 향후 유지보수 및 개선에 있어서 높은 생산성을 보장하기 때문이다.
> 4. 다만, JS자체가 아니기에 프로젝트 시작단계에서, 라이브러리 설치부터 진행해야 단다.

```bash
# npx === node package module (패키지 모듈 설치)
# create-react-app === 리액트 라이브러리를 사용한 새로운 프로젝트의 시작
# my-app === 폴더명, 프로젝트 이름에 따라 다양하게 변경됨
npx create-react-app my-app
# cd === change directory
# my-app === 접근하고자 하는 폴더
cd my-app
# npm === node package manager (패키지 모듈 실행/중단 등 관리)
# start === 설치된 package를 실행
npm start
```
---
### my-app의 파일구조
> 1. node_modules ===> React를 사용하면서 기능을 구현하기 위해 사용할 다양한 툴을 저장해놓은 폴더
> 2. public ===> 전역 설정 (React 프로젝트의 초기설정)
> 3. src ===> 실제 편집에 사용되는 파일들의 집합
> 4. package.json ===> 개발에 필요한 툴들을 정리 ===> npm install로 node_modules에 추가할 수 있다.
> 5. README.md ===> 현재 버전의 React에 대한 설명
