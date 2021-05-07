import Card from 'components/UI/card/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
import { useState } from 'react';
import { getFullYear } from 'utils/date';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState(
    new Date().getFullYear().toString()
  );

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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
