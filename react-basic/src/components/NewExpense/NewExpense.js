import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [addingExpense, setAddingExpense] = useState(false);

  const saveExpenseHandler = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    console.log('[NewExpense]', newExpense);

    props.onAddExpense(newExpense);
    setAddingExpense(false);
  };

  const startAddingHandler = (_event) => {
    setAddingExpense(true);
  };

  const cancelAddingHandler = () => {
    setAddingExpense(false);
  };

  return (
    <div className="new-expense">
      {addingExpense ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={cancelAddingHandler}
        />
      ) : (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
