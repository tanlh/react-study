import { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [selectedYear, setSelectedYear] = useState('');

  const selectYearHandler = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);
    console.log('[ExpensesFilter] selectedYear', selectedYear);
    props.onChangeFilterYear(selectedYear);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selectedYear} onChange={selectYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
