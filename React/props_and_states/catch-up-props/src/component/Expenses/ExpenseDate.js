import "./ExpenseDate.css";
import Card from "../UI/Card";

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en", { month: "short" });
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" });
  return (
    <Card className="expense-date">
      <div className="upper-date">
        <div className="expense-date__year">{year}/</div>
        <div className="expense-date__month">{month}</div>
      </div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
};

export default ExpenseDate;
