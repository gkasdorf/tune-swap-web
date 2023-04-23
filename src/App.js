import React from "react";
import "./App.scss";
import "./App.css";
import "preline";
import {Route, Routes} from "react-router-dom";
import HomeScreen from "./app/home/HomeScreen";
import LoginScreen from "./app/home/LoginScreen";
import SignupScreen from "./app/home/SignupScreen";
import DashScreen from "./app/dashboard/dash/DashScreen";
import SwapStepOneScreen from "./app/dashboard/swap/SwapStepOneScreen";
import SwapStepTwoScreen from "./app/dashboard/swap/SwapStepTwoScreen";
import SwapStepThreeScreen from "./app/dashboard/swap/SwapStepThreeScreen";
import SwapStepFourScreen from "./app/dashboard/swap/SwapStepFourScreen";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path={"/login"} element={<LoginScreen/>}/>
            <Route path={"/signup"} element={<SignupScreen/>}/>

            <Route path={"/app"} element={<DashScreen/>}/>
            <Route path={"/app/home"} element={<DashScreen/>}/>

            <Route path={"/app/swap"} element={<SwapStepOneScreen/>}/>
            <Route path={"/app/swap/step-one"} element={<SwapStepOneScreen/>}/>
            <Route path={"/app/swap/step-two"} element={<SwapStepTwoScreen/>}/>
            <Route path={"/app/swap/step-three"} element={<SwapStepThreeScreen/>}/>
            <Route path={"/app/swap/step-four"} element={<SwapStepFourScreen/>}/>
        </Routes>
    );
}

export default App;
