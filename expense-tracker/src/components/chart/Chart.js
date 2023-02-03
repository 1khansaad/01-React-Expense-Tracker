import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((data) => data.value);
  const totalMax = Math.max(...valueArray);
  return (
    <div className="chart">
      {props.dataPoints.map((ele) => {
        return (
          <ChartBar
            key={ele.label}
            maxValue={totalMax}
            label={ele.label}
            value={ele.value}
          />
        );
      })}
    </div>
  );
};

export default Chart;
