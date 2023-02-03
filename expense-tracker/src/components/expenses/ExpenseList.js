import ExpenceItem from "./ExpenceItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No Expenses Found.</p>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        return (
          <ExpenceItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
