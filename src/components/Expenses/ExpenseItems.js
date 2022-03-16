import ExpenseDate from './ExpenseDate';
import  './ExpenseItems.css'
import Card from '../UI/Card';

const ExpenseItems=(probs)=>{
//     const [title,setTitle]=useState(probs.title);
// console.log('expense items');
// const clickHandler=()=>{
// setTitle('updated');
// console.log(title);
// }
return(
    <li>
<Card className="expense-item">
<ExpenseDate date={probs.date} />
<div className="expense-item__description">
<h2>{probs.title} </h2>
<div className="expense-item__price">${probs.amount}</div>
</div>
</Card>
</li>
);

}
export default ExpenseItems;