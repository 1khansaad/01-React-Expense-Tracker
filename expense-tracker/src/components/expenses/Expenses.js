import React, { useState } from "react";
import "./Expenses.css";
import ExpenceItem from "./ExpenceItem";
import Card from "../UI/Crad";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

function Expenses(props) {
  const [year, setFilterdYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setFilterdYear(year);
  };

  const filteredArray = props.data.filter((x) => {
    return String(x.date.getFullYear()) === year;
  });

  let expensesData = <p>No data found!</p>;
  if (filteredArray.length > 0) {
    expensesData = filteredArray.map((expense) => {
      return (
        <ExpenceItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter setYear={year} onGetDataHandler={yearChangeHandler} />
        {expensesData}
      </Card>
    </div>
  );
}

export default Expenses;
