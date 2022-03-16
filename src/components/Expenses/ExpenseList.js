import './ExpenseList.css'
import ExpenseItems from './ExpenseItems';


const ExpenseList=(probs)=>{
    if(probs.items.length===0){
   return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

return (
<ul className='expenses-list'>
{probs.items.map((expense)=>(
            <ExpenseItems 
            key={expense.key}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />
           ))}
</ul>
)
 };

export default ExpenseList;