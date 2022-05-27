import {Route, Routes} from "react-router-dom";
import Home from "../routes/users/home";
import Header from "./layouts/header";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    );
}

export default App;
