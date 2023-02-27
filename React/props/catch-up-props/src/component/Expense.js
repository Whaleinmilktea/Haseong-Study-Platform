import ExpenseDate from "./ExpenseDate";
import ExpenseItems from "./ExpenseItems";

function Expense() {
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
    <div className="App">
      <h1>React practice</h1>
      <ExpenseItems
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}></ExpenseItems>
      <ExpenseItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}></ExpenseItems>
      <ExpenseItems
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}></ExpenseItems>
      <ExpenseItems
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}></ExpenseItems>
    </div>
  );
}

export default Expense;
