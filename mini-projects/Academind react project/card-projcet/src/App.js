import "./App.css";
import NewExpense from "./component/NewExpense/NewExpense";
import Expense from "./component/Expenses/Expense";

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
      <NewExpense />
      <Expense item={expenses} />
    </div>
  );
};

export default App;
