import React, { useState } from "react";
import Expenses from "./components/expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

const dummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 123.24,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV (Curve)",
    amount: 895.23,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 325.39,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 412.78,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, newExpenseList] = useState(dummyData);

  const onExpenseDataTransfer = (expenseData) => {
    newExpenseList((expense) => {
      console.log([expenseData, ...expense]);
      return [expenseData, ...expense];
    });
  };
  return (
    <div>
      <NewExpense onExpenseDataHandler={onExpenseDataTransfer} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
