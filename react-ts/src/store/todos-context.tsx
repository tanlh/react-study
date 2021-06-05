import React, { useState } from 'react';
import Todo from '../models/todo';

const TodosContext = React.createContext<{
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: (_todoText: string) => {},
  removeTodo: (_id: string) => {},
});

export const TodosContextProvider: React.FC<{}> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodoHandler = (newTodoText: string) => {
    setTodos((prevTodos) => prevTodos.concat(new Todo(newTodoText)));
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <TodosContext.Provider
      value={{
        items: todos,
        addTodo: addNewTodoHandler,
        removeTodo: removeTodoHandler,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
