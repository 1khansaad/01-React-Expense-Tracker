import React, { useState } from "react";
import "./Expenses.css";
import ExpenceItem from "./ExpenceItem";
import Card from "../UI/Crad";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilterdYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setFilterdYear(year);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          setYear={filteredYear}
          onGetDataHandler={yearChangeHandler}
        />
        {props.data.map((expense) => {
          return (
            <ExpenceItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
