import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {
  const [bookData, setBookData] = useState({
    title: props.title,
    amount: props.amount,
    date: props.date,
  });
  const clickHandler = () => {
    setBookData({
      title: 'new title',
      amount: '420',
      date: new Date(2222, 2, 22),
    });
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{bookData.title}</h2>
        <div className="expense-item__price">${bookData.amount}</div>
      </div>
      <button onClick={clickHandler}>Click !</button>
    </Card>
  );
};

export default ExpenseItem;
