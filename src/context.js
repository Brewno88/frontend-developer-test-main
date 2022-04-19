import React from 'react';
import useTodos from './hooks';

const Context = React.createContext();

export const AppContextProvider = props => {
  const { todos, todosCount, actions } = useTodos();

  const providerValue = {
    todos,
    todosCount,
    actions
  };

  return (
    <Context.Provider value={providerValue}>{props.children}</Context.Provider>
  );
};
export default Context;
