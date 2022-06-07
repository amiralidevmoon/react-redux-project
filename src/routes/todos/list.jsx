import React from 'react';
import Item from "../../components/todos/item";
import {useOutletContext} from "react-router-dom";

function List() {
    let todos = useOutletContext();

    return (
        <>
            {
                todos && todos.map((todo) => <Item key={todo.id} todo={todo}/>)
            }
        </>
    );
}

export default React.memo(List);