import React from 'react';
import Item from "../../components/todos/item";
import {useOutletContext} from "react-router-dom";

function Undone() {
    let todos = useOutletContext();

    let undoneTodos = todos.filter((todo) => todo.status === false);

    return (
        <>
            {
                undoneTodos && undoneTodos.map((todo) => <Item key={todo.id} todo={todo}/>)
            }
        </>
    );
}

export default React.memo(Undone);