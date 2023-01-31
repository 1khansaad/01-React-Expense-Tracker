import Expenses from "./components/expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV (Curve)",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450.6,
      date: new Date(2021, 5, 12),
    },
  ];

  const onExpenseDataTransfer = (expenseData) => {
    expenses.push(expenseData);
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense onExpenseDataHandler={onExpenseDataTransfer} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
