import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const dummyData = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 1234,
      date: new Date(2021, 8, 28),
    },
    {
      id: "e2",
      title: "Books",
      amount: 1234,
      date: new Date(2021, 8, 28),
    },
    {
      id: "e3",
      title: "Food",
      amount: 1234,
      date: new Date(2021, 8, 28),
    },
    {
      id: "e4",
      title: "party",
      amount: 1234,
      date: new Date(2021, 8, 28),
    },
  ];
  return (
    <div className="App">
      <ExpenseItem
        title={dummyData[0].title}
        amount={dummyData[0].amount}
        date={dummyData[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={dummyData[1].title}
        amount={dummyData[1].amount}
        date={dummyData[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={dummyData[2].title}
        amount={dummyData[2].amount}
        date={dummyData[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={dummyData[3].title}
        amount={dummyData[3].amount}
        date={dummyData[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
