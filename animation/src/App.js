import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import { useState } from 'react';
import Transition from 'react-transition-group/Transition';

const App = (props) => {
  const [modalIsShow, setModalIsShow] = useState(false);

  const toggleModalHandler = () => {
    setModalIsShow((prevState) => !prevState);
  };

  return (
    <div className="app">
      <h1>React Animations</h1>
      <Modal show={modalIsShow} closed={toggleModalHandler} />
      <Transition in={modalIsShow} timeout={300} mountOnEnter unmountOnExit>
        {(state) => (
          <>
            <Backdrop show={state} />
          </>
        )}
      </Transition>
      <button className="button" onClick={toggleModalHandler}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
