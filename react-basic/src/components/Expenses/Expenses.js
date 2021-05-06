import Card from 'components/UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import { getFullYear } from 'utils/date';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('2020');

  const filterYearChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => getFullYear(expense.date).toString() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onChangeFilterYear={filterYearChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
