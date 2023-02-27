import "./ExpenseDate.css";

function ExpenseDate(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("ko-kr", { month: "short" });
  const day = props.date.toLocaleString("ko-kr", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}년</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
