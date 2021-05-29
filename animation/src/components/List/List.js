import './List.css';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { useState } from 'react';

const List = (props) => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prevState) => prevState.concat(prevState.length + 1));
  };

  const removeItemHandler = (selIndex) => {
    setItems((prevState) =>
      prevState.filter((item, index) => index !== selIndex)
    );
  };

  const listItems = items.map((item, index) => (
    <CSSTransition key={index} timeout={300} classNames="fade">
      <li className="list-item" onClick={() => removeItemHandler(index)}>
        {item}
      </li>
    </CSSTransition>
  ));

  return (
    <div>
      <button className="button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <TransitionGroup className="list" component="ul">
        {listItems}
      </TransitionGroup>
    </div>
  );
};

export default List;
