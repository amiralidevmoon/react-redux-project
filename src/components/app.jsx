import {Route, Routes} from "react-router-dom";
import Home from "../routes/home";
import Header from "./layouts/header";
import React from "react";
import UserIndex from "../routes/users";
import TodoIndex from "../routes/todos";
import Single from "../routes/users/single";
import List from "../routes/todos/list";
import Done from "../routes/todos/done";
import Undone from "../routes/todos/undone";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/users" element={<UserIndex/>}/>
                <Route path="/users/:id" element={<Single/>}/>
                <Route path="/todos" element={<TodoIndex/>}>
                    <Route path="" element={<List/>}/>
                    <Route path="done" element={<Done/>}/>
                    <Route path="undone" element={<Undone/>}/>
                </Route>
                <Route path="/todos/:id" element={<TodoIndex/>}/>
            </Routes>
        </>
    );
}

export default React.memo(App);
