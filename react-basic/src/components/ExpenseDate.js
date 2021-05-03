import * as util from 'utils/date.js';
import './ExpenseDate.css';

function ExpenseDate(props) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">{util.getMonth(props.date)}</div>
      <div className="expense-date__year">{util.getFullYear(props.date)}</div>
      <div className="expense-date__day">{util.getDay(props.date)}</div>
    </div>
  );
}

export default ExpenseDate;
