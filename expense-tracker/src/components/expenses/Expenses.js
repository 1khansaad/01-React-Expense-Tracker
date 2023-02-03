import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
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
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter setYear={year} onGetDataHandler={yearChangeHandler} />
        <ExpenseList items={filteredArray} />
      </Card>
    </div>
  );
}

export default Expenses;
