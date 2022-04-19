import React from "react";
import initialData from "./data";

const Context = React.createContext();

export const AppContextProvider = (props) => {
   const providerValue = { // need to implement
       todos: initialData,
       todosCount: 0,
       actions: {},
   };

    return (
        <Context.Provider value={providerValue}>{props.children}</Context.Provider>
    );
};
export default Context;
