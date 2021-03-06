import './ExpenseForm.css';
import react ,{useState} from 'react';
const ExpenseForm=(probs)=>{
   const [enteredTitle,setEnteredTitle]=useState('');
   const [enteredAmount,setEnteredAmount]=useState('');
   const [enteredDate,setEnteredDate]=useState('');
// const [userInput,setUserInput]=useState({
// enteredTitle:'',
// enteredAmount:'',
// enteredDate:''
// })

const submitHandler=(event)=>{
event.preventDefault();
const expesnseData={id:Math.random(),title:enteredTitle,amount:enteredAmount,date:new Date(enteredDate)};
probs.onSaveData(expesnseData);
console.log(expesnseData);
};



const titleChangeHandler=(event)=>{
    // setUserInput((prevState)=>{
// return {...prevState,enteredTitle:event.target.value};
//     })
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
    // })
setEnteredTitle(event.target.value);
};
const amountChangeHandler=(event)=>{
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    // })
    setEnteredAmount(event.target.value);
    // setUserInput((prevState)=>{
    //     return {...prevState,enteredAmount:event.target.value};
    //     }
    };
    const dateChangeHandler=(event)=>{
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // })
        setEnteredDate(event.target.value);
        // setUserInput((prevState)=>{
        // return {...prevState,enteredDate:event.target.value};
        // })
        };
return <form onSubmit={submitHandler}> 
    <div className='new-expesne__controls'>
<div className='new-expense__control'>
    <label>Title</label>
    <input type='text' onChange={titleChangeHandler} value={enteredTitle} />
</div>
<div className='new-expense__control'>
    <label>Amount</label>
    <input type='number'  min='0.01' step='0.01' onChange={amountChangeHandler}  value={enteredAmount}/>
</div>
<div className='new-expense__control'>
    <label>Date</label>
    <input type='date'  min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
</div>
    </div>

<div className='new-expense__actions'>
<button type='submit'>Add Expense</button>
</div>
</form>
}

export default ExpenseForm;