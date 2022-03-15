import ExpenseItems from "./components/Expenses/ExpenseItems";
import Expenses from "./components/Expenses/Expenses";
function App() {
  const expense=[{id:1,title:'NEW YORK',amount:450,date:new Date(2022,5,6)},{id:2,title:'NEW Mexico',amount:5550,date:new Date(2022,7,12)}]
  return (
    <div>
      <h2>Let's get started!</h2>
<Expenses items={expense}  />
    </div>
  );
}

export default App;
