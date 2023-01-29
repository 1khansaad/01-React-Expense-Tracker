import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [currentTitle, setNewTitle] = useState("");
  const [currentAmount, setNewAmount] = useState("");
  const [currentDate, setNewDate] = useState("");

  const TitleChangeHandler = (e) => {
    setNewTitle(e.target.value);
  };
  const AmountChangeHandler = (e) => {
    setNewAmount(e.target.value);
  };
  const DateChangeHandler = (e) => {
    setNewDate(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    let data = {
      title: currentTitle,
      amount: currentAmount,
      date: new Date(currentDate),
    };
    console.log(data);
    setNewAmount("");
    setNewDate("");
    setNewTitle("");
  };
  return (
    <form onSubmit={SubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={currentTitle}
            onChange={TitleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={currentAmount}
            min="0.01"
            step="0.01"
            onChange={AmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={currentDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={DateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
