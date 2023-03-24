import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id : Math.random().toString(),
    }
    console.log(expenseData) // 왜 여기서는 객체를 못 받고 있는걸까?
    props.onAddExpense(expenseData)
  }

  return (
    <>
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
    </>
  )
}

export default NewExpense;