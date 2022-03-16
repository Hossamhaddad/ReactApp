import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense=(probs)=>{
const saveExpenseDataHandler=(enteredExpenseData)=>{
const expenseData=enteredExpenseData;
probs.onAddExpense(expenseData);
console.log(expenseData);
}
return(
<div className='new-expense'>

<ExpenseForm  onSaveData={saveExpenseDataHandler} />

</div>

)}
export default NewExpense;