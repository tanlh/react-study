import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxFillValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxFillValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
