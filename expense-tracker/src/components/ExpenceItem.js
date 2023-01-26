import "./ExpenseItem.css";

function ExpenceItem() {
  return (
    <div className="expense-item">
      <div>9th November 2023</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">243.76$</div>
      </div>
    </div>
  );
}

export default ExpenceItem;
