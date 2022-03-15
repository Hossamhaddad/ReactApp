import ExpenseItems  from "./ExpenseItems";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses=(probs)=>{
    return(
        <Card className="expenses">
<ExpenseItems
title={probs.items[0].title}
amount={probs.items[0].amount}
date={probs.items[0].date}
/>

<ExpenseItems
title={probs.items[1].title}
amount={probs.items[1].amount}
date={probs.items[1].date}
/>

</Card>
    )
}
export default Expenses