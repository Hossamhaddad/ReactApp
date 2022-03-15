import ExpenseDate from './ExpenseDate';
import  './ExpenseItems.css'
import Card from '../UI/Card';

const ExpenseItems=(probs)=>{

return(
<Card className="expense-item">
<ExpenseDate date={probs.date} />
<div className="expense-item__description">
<h2>{probs.title} </h2>
<div className="expense-item__price">${probs.amount}</div>
</div>
</Card>
);

}
export default ExpenseItems;