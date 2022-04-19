import React, { useCallback, useEffect, useState } from 'react';
import initialData from './data';

const Context = React.createContext();

export const AppContextProvider = props => {
  const [todos, setTodos] = useState(initialData);
  const [todosCount, setTodosCount] = useState(todos.length);

  //   Update Count on todos changes
  useEffect(() => {
    setTodosCount(todos.length);
  }, [todos.length]);

  const addTodo = useCallback(todoText => {
    setTodos(state => [
      ...state,
      { text: todoText, isCompleted: false, id: Date.now().toString() }
    ]);
  }, []);

  const removeTodo = useCallback(index => {
    setTodos(state => {
      const copy = [...state];
      copy.splice(index, 1);
      return copy;
    });
  }, []);

  // This Toggle the Completion
  const completeTodo = useCallback(index => {
    setTodos(state => {
      const toComplete = {
        ...state[index],
        isCompleted: !state[index].isCompleted
      };
      const copy = [...state];
      copy.splice(index, 1, toComplete);
      return copy;
    });
  }, []);

  const clearAll = useCallback(() => {
    setTodos([]);
  }, []);

  const providerValue = {
    // need to implement
    todos,
    todosCount,
    actions: { addTodo, removeTodo, completeTodo, clearAll }
  };

  return (
    <Context.Provider value={providerValue}>{props.children}</Context.Provider>
  );
};
export default Context;
