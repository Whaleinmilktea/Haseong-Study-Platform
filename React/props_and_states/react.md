### 해당 파일은 Codesandbox에서 작성되었습니다.

---

https://codesandbox.io/s/catch-up-props-1s709m?file=/src/component/Expense.js

#### **Props?**

props는 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달해주도록 하는 **"속성"**이다.

속성이라는 말에서 알 수 있듯, props는 마치 html 태그에 속성을 추가하는 모습처럼 사용된다.

```
import "./styles.css";
import "./component/ExpenseItems";
import Expense from "./component/Expense";

const App = () => {
  // 나는 App 함수에서 정의된 객체들을 App 컴포넌트가 아닌 하위 컴포넌트에서도 동시에 제어하고자 한다.
  const expenses = [
    {
      id: "e1",
      title: "멘토 매칭 서비스",
      amount: 99000,
      date: new Date(2020, 7, 14)
    },
    {
      id: "e2",
      title: "장단기 종합 컨설팅",
      amount: 299000,
      date: new Date(2021, 2, 12)
    },
    {
      id: "e3",
      title: "Tuturing Insurance",
      amount: 33000,
      date: new Date(2021, 2, 28)
    },
    {
      id: "e4",
      title: "English basic course",
      amount: 99000,
      date: new Date(2021, 5, 12)
    }
  ];

  return (
    <div>
      {/* 전달해주는 코드 */}
      {/* item은 데이터가 담길 변수이므로 맘대로!, expense는 담길 객체/데이터의 이름 */}
      {/* 실제로 전달되는 값은 {name : [{id:"el", tilte:"멘토 매칭 서비스", amount : "99000", date: new Date(2020, 7, 14)}...] */}
      <Expense item={expenses}></Expense>
    </div>
  );
};

export default App;
```

이후 하위 컴포넌트에서는 Destructuring을 통해 원하는 데이터를 할당해서 사용한다.

```
import ExpenseItems from "./ExpenseItems";
import "./Expense.css";
import Card from "./Card";

// 여기에서 상위의 {expense}라는 데이터를 전달받을 것을 명시하기 위해
// 매개변수에 props를 넣어줌!
const Expense = (props) => {
  return (
    <Card className="expenses">
      <h1>Haseong's React practice</h1>
      <ExpenseItems
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}></ExpenseItems>
      <ExpenseItems
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}></ExpenseItems>
      <ExpenseItems
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}></ExpenseItems>
      <ExpenseItems
        title={props.item[3].title}
        amount={props.item[3].amount}
        date={props.item[3].date}></ExpenseItems>
    </Card>
  );
};

export default Expense;
```

마지막으로 받아들인 데이터를 최종 처리 혹은 이벤트 핸들링을 통해 제어할 컴포넌트까지 동일한 방식으로 전달된다.

```
import { useState } from "react"; // 리렌더링 조건을 알려주고, 상태를 다루기 위한 Hook
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "./Card";

const ExpenseItems = (props) => {
  const title = props.title;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}₩</div>
    </Card>
  );
};

export default ExpenseItems;
```

#### **React Event?**

> **이벤트 핸들링 (Event Handling) :** React에서 이벤트 핸들링(Event Handling)은 사용자가 웹 페이지 상에서 발생시키는 이벤트를 처리하는 것!  
> **이벤트 리스닝 (Event Listening) :** 이벤트 리스닝(Event Listening)은 React 컴포넌트가 마운트되었을 때, 브라우저에서 발생하는 이벤트를 수신하는 것!

#### **이벤트(Event) 처리 규칙!**

> 1\. 이벤트 함수는 HTML(onclick)과 달리 카멜표기법(onClick)을 사용한다.  
> 2\. 이벤트는 항상 함수의 형태로 전달한다.  
> 3\. 이벤트는 JSX(DOM) 안에서만 설정된다.

#### **아래의 코드가 동작하지 않는 이유?**

```
// import 부분 생략

const ExpenseItems = (props) => {
  let title = props.title; // 1. let 변수에 props.title(초기값)을 할당


  const ClickHandler = () => {
    title = "Updated"; // 2. 버튼이 클릭될 때 title에 Updated라는 문자열을 재할당
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>      
        {/*4. 타이틀에 있는 변수가 Updated로 변경*/}
      </div>
      <div className="expense-item__price">{props.amount}₩</div>
      <button onClick={ClickHandler}>Change Title</button> 
      {/*3. button에 click이벤트가 발생하면,*/}
    </Card>
  );
};

export default ExpenseItems;
```

이는, React의 기본적인 작동방식으로 인함이다.

React는 모든 컴포넌트와 컴포넌트 내부의 함수를 읽고, 이를 컴포지션하여, DOM tree형식으로 렌더링하고, 브라우저에 HTML형식으로 노출시킨다. 이후 React는 특정한 조건이 성립하지 않는 이상 웹을 Rerendering 하지 않는다.

(설사, Rerendering이 일어날지라도 render되는 순간 title은 즉시, props.title로 초기화될 것이기 때문에, 원하는 결과를 브라우저에 노출시킬 수 없을 것이다.)

#### **States?**

React는 컴포넌트의 상태를 다루기 위해 기존의 재할당과 유사하지만 조금 다른, Hook이라는 개념을 도입했다.

( \* Hook은 class형 컴포넌트 설계에서 함수형 컴포넌트 설계로 변화되면서 등장한 개념이지만, 정적인 페이지를 동적으로 상호작용할 수 있도록 함수를 제어하기에 위와 같은 표현을 사용했다. )

여러 Hook이 있고, 심지어 사용자가 직접 Hook을 정의하는 custom Hook의 개념도 있지만,

상태를 관리하는데 가장 기본적은 Hook은 useState다.

**기본구문**

```
import { useState } from "React"

function NewComponent () {
	const [newState(현재값), setNewState(이벤트 발생 시 새로 업데이트 될 값)] = useState(초기값)
	function () {
    	setNewState(업데이트 될 상태)
    }
}
```

아래는 위의 props와 event 구문에 이은 활용문이다.

```
// 상단 import 생략
import { useState } from "react"; // 리렌더링 조건을 알려주고, 상태를 다루기 위한 Hook


const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title); // 1. useState 호출
  // 2. title = 현재 관리되고 있는 함수
  // 3. setTitle = 새로운 title을 생성하기 위해 호출할 함수

  // let title = props.title; ===> 상태를 재할당하기 위한 방법으로 적절치 않음!

  const ClickHandler = () => {
    // let title = "Updated"; ===> 상태를 재할당하기 위한 방법으로 적절치 않음!
    setTitle("Updated!");
    // 4. button Click시에 Updated라는 문자열로 상태를 변경!
    console.log("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* 5. 현재 관리되고 있는 상태가 보여지게 된다 */}
      </div>
      <div className="expense-item__price">{props.amount}₩</div>
      <button onClick={ClickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItems;
```
