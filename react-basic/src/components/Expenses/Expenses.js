import Card from 'components/UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('');

  const filterYearChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selectedYear={filterYear}
          onChangeFilterYear={filterYearChangeHandler}
        />
      </div>

      {props.items.map((ex) => (
        <ExpenseItem
          key={ex.id}
          title={ex.title}
          amount={ex.amount}
          date={ex.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
