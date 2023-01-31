import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Crad";

function ExpenceItem(props) {
  const [currentTitle, titleFunction] = useState(props.title);

  const eventHandler = () => {
    titleFunction("Updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{currentTitle}</h2>
        <div className="expense-item__price">{props.amount}$</div>
      </div>
    </Card>
  );
}

export default ExpenceItem;
