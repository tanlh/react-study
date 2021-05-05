import Card from 'components/UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
  const changeFilterYearHandler = (selectedYear) => {
    const filter = {
      year: +selectedYear,
    };
    console.log('[Expenses] filter', filter);
    props.onFilterExpenses(filter);
  };

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter onChangeFilterYear={changeFilterYearHandler} />
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
