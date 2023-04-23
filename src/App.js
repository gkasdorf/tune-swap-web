import React from "react";
import "./App.scss";
import "./App.css";
import "preline";
import {Route, Routes} from "react-router-dom";
import HomeScreen from "./app/home/HomeScreen";
import LoginScreen from "./app/home/LoginScreen";
import SignupScreen from "./app/home/SignupScreen";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path={"/login"} element={<LoginScreen/>}/>
            <Route path={"/signup"} element={<SignupScreen/>}/>
        </Routes>
    );
}

export default App;
