import "./Expenses.css";
import ExpenceItem from "./ExpenceItem";
import Card from "../UI/Crad";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenceItem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
      <ExpenceItem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      />
      <ExpenceItem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      />
      <ExpenceItem
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      />
    </Card>
  );
}

export default Expenses;
