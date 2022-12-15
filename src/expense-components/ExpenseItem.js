import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>21 Nov 2022</div>
      <div className="expense-item__description">
        <h2>Birthday party</h2>
        <div className="expense-item__price">$50.25</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
