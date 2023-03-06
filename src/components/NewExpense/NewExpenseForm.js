import React, { useState } from 'react';
import './NewExpenseForm.css';

function NewExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //const [expenseInput , setExpenseInput] = useState({enteredTitle :"" ,enteredAmount:"" ,enteredDate=""})

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*setExpenseInput({
      ...expenseInput,
      enteredTitle : event.target.value,
    })*/
    /*setExpenseInput((prevState)=>{
      return{...prevState,enteredTitle:event.target.value}
    })*/
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredTitle('');
    setEnteredDate('');
  };
  return (
    <form action="" onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-12-12"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="Submit">Add Expanse</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
