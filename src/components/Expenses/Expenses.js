import './Expenses.css'
import Card from "../UI/Card";
import react ,{useState} from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";



const Expenses=(probs)=>{

const [filteredYear,setFilteredYear]=useState('2020');

const  filterChangeHandler=(selectedYear)=>{
setFilteredYear(selectedYear);
}

const fillterdExpenses=probs.item.filter(expense=>{
return expense.date.getFullYear().toString()===filteredYear;
});


    return(
        <div>
        <Card className="expenses">
            <ExpensesFilter  selected={filteredYear} 
            onChangeFilter={filterChangeHandler}
            />
            
<ExpenseList  items={fillterdExpenses} />
</Card>
</div>

    )
}
export default Expenses