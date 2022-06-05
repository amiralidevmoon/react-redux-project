import {Route, Routes} from "react-router-dom";
import Home from "../routes/home";
import Header from "./layouts/header";
import React from "react";
import UserIndex from "../routes/users";
import TodoIndex from "../routes/todos";
import Single from "../routes/users/single";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/users" element={<UserIndex/>}/>
                <Route path="/users/:id" element={<Single/>}/>
                <Route path="/todos" element={<TodoIndex/>}/>
                <Route path="/todos/:id" element={<TodoIndex/>}/>
            </Routes>
        </>
    );
}

export default React.memo(App);
