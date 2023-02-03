import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [IsEditing, SetIsEditing] = useState(false);

  function ShowFormHandler() {
    SetIsEditing(true);
  }

  function HideFormHandler() {
    SetIsEditing(false);
  }
  const onExpenseDataTransfer = (expenseData) => {
    const data = {
      id: Math.random(),
      ...expenseData,
    };
    props.onExpenseDataHandler(data);
  };

  return (
    <div className="new-expense">
      {!IsEditing && <button onClick={ShowFormHandler}>Add New Expense</button>}
      {IsEditing && (
        <ExpenseForm
          onExpenseDataHandler={onExpenseDataTransfer}
          onHideForm={HideFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
