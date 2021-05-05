import Expenses from 'components/Expenses/Expenses';
import NewExpense from 'components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { id: 'e1', title: 'Food', amount: 5, date: new Date(2019, 2, 1) },
    { id: 'e2', title: 'Taxi', amount: 6, date: new Date(2020, 3, 1) },
    { id: 'e3', title: 'Parking fee', amount: 5, date: new Date(2020, 4, 2) },
    { id: 'e4', title: 'Travel', amount: 400, date: new Date(2021, 4, 26) },
  ];

  const addExpenseHandler = (newExpense) => {
    console.log('[App]', newExpense);
  };

  return (
    <div className="App">
      <h1>Expenses tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
