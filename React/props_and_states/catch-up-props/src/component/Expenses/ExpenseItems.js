import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "../UI/Card";
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
