import React from 'react';
import {useOutletContext} from "react-router-dom";
import Item from "../../components/todos/item";

function Done() {
    let todos = useOutletContext();

    let doneTodos = todos.filter((todo) => todo.status === true);

    return (
        <>
            {
                doneTodos && doneTodos.map((todo) => <Item key={todo.id} todo={todo}/>)
            }
        </>
    );
}

export default React.memo(Done);