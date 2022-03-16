import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React ,{useState} from 'react'
const dummy_data=[{id:1,title:'NEW YORK',amount:450,date:new Date(2022,5,6)},{id:2,title:'NEW Mexico',amount:5550,date:new Date(2022,7,12)},{id:3,title:'NEW Mexico',amount:5550,date:new Date(2022,7,12)}];

const App= ()=> {
  const [expense,setExpense]=useState(dummy_data);
  const addExpenseHandler=expense=>{
  setExpense(prevExpenses=>{  
return [expense,  ...prevExpenses];
   });
  };
  return (
    <div>
   <NewExpense onAddExpense={addExpenseHandler} />
<Expenses item={expense}  />
    </div>
  );
}

export default App;
  