import Card from 'components/UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import { getFullYear } from 'utils/date';

function Expenses(props) {
  const [filterYear, setFilterYear] = useState('');
  const [filteredExpenses, setFilterExpenses] = useState(props.items);

  const filterYearChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);

    const afterFilterExpenses = [...filteredExpenses].filter(
      (expense) => getFullYear(expense.date) === +selectedYear
    );
    setFilterExpenses(afterFilterExpenses);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filterYear}
        onChangeFilterYear={filterYearChangeHandler}
      />

      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
