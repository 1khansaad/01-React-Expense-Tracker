import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onExpenseDataTransfer = (expenseData) => {
    const data = {
      id: Math.random(),
      ...expenseData,
    };
    props.onExpenseDataHandler(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseDataHandler={onExpenseDataTransfer} />;
    </div>
  );
};

export default NewExpense;
