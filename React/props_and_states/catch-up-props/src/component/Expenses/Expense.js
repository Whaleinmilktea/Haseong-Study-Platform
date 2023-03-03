import ExpenseItems from "./ExpenseItems";
import "./Expense.css";
import Card from "../UI/Card";

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
