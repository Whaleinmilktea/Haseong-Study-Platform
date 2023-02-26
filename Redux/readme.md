> " React는 Component를 기반으로 하는 상태관리 라이브러리다. "

사용자가 애플리케이션에서 상호작용을 하게되면, React는 상위 컴포넌트가 갖고 있는 상태를 props(속성)의 형태로 하위 컴포넌트에 전달하게 된다.

따라서 여러 컴포넌트가 상호작용하는 React에서는 변화하는 값이 어떤 컴포넌트에서 왔는지 알아야 핢에도 모든 컴포넌트가 부모자식 관계로 묶여있지 않은 이상, 현재의 props가 어디서부터 왔는지 파악하는 것은 프로젝트의 규모가 커짐에 따라 상당히 어려운 문제가 된다.

props를 전달하는 규모에 따라서 상태를 크게 3가지로 나눌 수 있는데, 이는 아래와 같다.

> **1\. Local State :** props가 컴포넌트 간의 교환이 아닌 한 컴포넌트 안에서 교환이 일어나는 상태이다.
> **2\. Cross-Component State :** props가 2개 이상의 컴포넌트 사이에서 교환이 일어나는 상태이다.
> **3\. App-Wide State :** props가 프로젝트 전체에 걸쳐 교환이 일어나는 상태이다.

이러한 컴포넌트 교환이 일어나는 과정에서, props가 하위 컴포넌트에 끊임없이 전달되는 상태를 **props drilling**이라고 한다.

props drilling은 그 자체로 문제라고 보기는 어렵다.

React가 채택하는 컴포넌트와 상태의 개념을 사용하면 필연적으로 발생하는 상황이기 때문이다.

그러나, 프로젝트 규모가 커져서 props drilling이 과하게 발생한다면 다음과 같은 문제를 야기할 수 있다.

> 1\. 코드의 가독성이 나빠진다.
> 2\. 코드의 유지 보수에 불리하다
> 3\. Props가 전달 과정에서 예기치 못한 리렌더링을 야기하여 웹 퍼포먼스에 영향을 미칠 수 있다.

---

이러한 과제를 극복하기 위해 고안된 라이브러리들이 있다.

**redux, Mobx, recoil** 등과 같은 사용하면 해당 값들을 필요로 하는 컴포넌트에서 직접 불러서 사용할 수 있게 된다.

[##_Image|kage@chdDFo/btr0DVRM9yW/GLRxBIDoWHaopFeAjNBXok/img.png|CDM|1.3|{"originWidth":1200,"originHeight":600,"style":"alignCenter","filename":"redux-logo-landscape.png"}_##]
​
#### **상태 관리 Toolkit Redux**
​
Redux는 Toolkit이라는 이름에서 알 수 있듯, 상태를 관리하기 위한 여러 컴포넌트 및 메서드가 포함된 라이브러리를 의미한다.
​
[##_Image|kage@clZVWJ/btr0DU6pstB/pPBGxrAL9SLXe7Y4fd4UD0/img.png|CDM|1.3|{"originWidth":527,"originHeight":293,"style":"alignCenter","caption":"출처 :&amp;nbsp;https://yahooeng.tumblr.com/post/152078809581/refactoring-components-for-redux-performance","filename":"tumblr_inline_ofcyamw87F1rgj0aw_540.png"}_##]
​
기본적으로 Redux는 트리 형식으로 props를 하위 컴포넌트로 전달하는 방식이며, state를 통해 상태를 업데이트하며 관리하기 때문에, 중간에 컴포넌트에서 변경된 state가 쓸데없이 다른 컴포넌트에 전달되며 불필요한 자원소모 및 렌더링을 필연적으로 유발한다.(props drilling)
​
이를 관리하기 위해 중간에 위치한 컴포넌트의 변경사항을 즉시 최상위 컴포넌트에 적용하기 위한 Toolkit인 Redux, Recoil 등이 필요해졌다.
​
---
​
#### **Redux 데이터 흐름**
​
[##_Image|kage@bC5rCi/btr0zGnExlw/jKLyLgj2L7bQNXYXfPju1k/img.png|CDM|1.3|{"originWidth":692,"originHeight":472,"style":"alignCenter","caption":"출처 : GeektoGeeks","filename":"reactreduxx.png"}_##]
​
Redux는 Action → Dispatch → Reducer → Store로 이어지는 단방향적 데이터 흐름을 갖는 것이 특징이다.
​
각각의 지점은 다음과 같은 역할을 맡는다.
​
> 1\. Action : states의 상태 변화를 정의한 "객체" ===> 컴포넌트 내에서 일어난 상호작용의 결과를 객체로 Action에 담는다.
> 2\. Dispatch : Action 객체를 Reducer에 전달한다.
> 3\. Reducer : 최상위 컴포넌트로 전달하기 전 새로운 states를 생성하는 "순수함수"이다.
> 4\. Store : 상태가 저장된 Redux의 저장소이다.
> 이렇게 Store로 전달된 states는 useSelector()를 통해 최상위 컴포넌트에서 접근할 수 있게 된다.
​
---
​
**Redux 기본문법**
​
1\. Redux 설치
​
```
# 이미 설치된 react 프로젝트에 redux toolkit 추가하기
npm install redux
npm install react-redux
​
​
# 많은 경우, 상태관리 toolkit을 사용하기에 번들러로 react 프로젝트를 생성할 때 함께 생성할 수 있다.
create-react-app project-name --template redux
create-react-app project-name --template redux-typescript
```
​
**2\. Store** 만들기 : Root 컴포넌트에 Redux toolkit import하고, store 만들기
​
```
import { createStore } from 'redux';
import { Provider } from 'react-redux'; // store를 관리할 수 있게 하는 "컴포넌트"
import { legacy_createStore as createStore } from 'redux'; // root컴포넌트에서 사용할 store를 생성하는 tool
​
const store = createStore(rootReducer);
​
root.render(
  <Provider> // Provider로 감싸줌으로 효율적으로 store를 관리할 수 있도록 한다.
    <App />
  </Provider>
);
```
​
**3\. Action** 만들기 : dispatch할 Action 정의하기
​
**4\. Reducer** 만들기 : Reducer는 Dispatch에게서 전달받은 Action 객체의 type 값에 따라서 상태를 변경시키는 **함수**
​
```
const count = 0;
const counterReducer = (state = count, action) => { // 초기값 명시
​
  // Action 객체의 type 값에 따라 분기하는 switch 조건문입니다.
  switch (action.type) {

    case 'INCREASE':
            return state + 1
​
    case 'DECREASE':
            return state - 1
​
    case 'SET_NUMBER':
            return action.payload
​
    default:
      return state;
    }
}
```


