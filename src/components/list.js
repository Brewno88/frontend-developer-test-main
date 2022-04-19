import React from "react";

import AppContext from "../context";
import Form from "./form";
import Item from "./item";

import styles from "./list.module.css";

function List() {
    const {actions, todos} = React.useContext(AppContext);

    return (
        <div className={styles.list}>
            {todos.map((todo, index) => (
                <Item
                    key={index}
                    index={index}
                    item={todo}
                    completeTodo={actions.completeTodo}
                    removeTodo={actions.removeTodo}
                />
            ))}
            <Form addTodo={actions.addTodo}/>
        </div>
    );
}

export default List;
