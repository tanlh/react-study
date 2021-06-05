import React, { useContext, useRef } from 'react';
import TodosContext from '../store/todos-context';
import styles from './NewTodo.module.css';

const NewTodo = () => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredTodo = todoInputRef.current!.value;

    if (enteredTodo.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredTodo);
  };

  return (
    <form onSubmit={addTodoHandler} className={styles.form}>
      <label htmlFor="text" className={styles.label}>
        Todo text
      </label>
      <input
        ref={todoInputRef}
        type="text"
        id="text"
        className={styles.input}
      />
      <button className={styles.button}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
