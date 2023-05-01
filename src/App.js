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
import SwapStatusScreen from "./app/dashboard/swap/SwapStatusScreen";
import SwapListScreen from "./app/dashboard/swap/SwapListScreen";
import UserSettingsScreen from "./app/dashboard/user/UserSettingsScreen";
import SpotifyAuthScreen from "./app/dashboard/swap/authScreens/SpotifyAuthScreen";
import SpotifyAuthCallback from "./app/dashboard/swap/authScreens/callbacks/SpotifyAuthCallback";
import AppleMusicAuthScreen from "./app/dashboard/swap/authScreens/AppleMusicAuthScreen";
import PrivacyScreen from "./app/policy/PrivacyScreen";
import TermsScreen from "./app/policy/TermsScreen";
import SyncsScreen from "./app/dashboard/sync/SyncsScreen";
import SyncStepOne from "./app/dashboard/sync/SyncStepOne";
import SharesScreen from "./app/dashboard/share/SharesScreen";
import NewShareScreen from "./app/dashboard/share/NewShareScreen";
import ShareScreen from "./app/dashboard/share/ShareScreen";
import CopyScreen from "./app/dashboard/share/CopyScreen";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path={"/login"} element={<LoginScreen/>}/>
            <Route path={"/signup"} element={<SignupScreen/>}/>

            <Route path={"/privacy"} element={<PrivacyScreen/>}/>
            <Route path={"/terms"} element={<TermsScreen/>}/>

            <Route path={"/app"} element={<DashScreen/>}/>
            <Route path={"/app/home"} element={<DashScreen/>}/>

            <Route path={"/app/swap"} element={<SwapStepOneScreen/>}/>
            <Route path={"/app/swap/step-one"} element={<SwapStepOneScreen/>}/>
            <Route path={"/app/swap/step-two"} element={<SwapStepTwoScreen/>}/>
            <Route path={"/app/swap/step-three"} element={<SwapStepThreeScreen/>}/>
            <Route path={"/app/swap/step-four"} element={<SwapStepFourScreen/>}/>

            <Route path={"/app/swap/all"} element={<SwapListScreen />}/>

            <Route path={"/app/swap/:swapId"} element={<SwapStatusScreen />}/>

            <Route path={"/app/sync"} element={<SyncsScreen />}/>

            <Route path={"/app/sync/new"} element={<SyncStepOne />}/>
            <Route path={"/app/sync/new/step-one"} element={<SyncStepOne />}/>

            <Route path={"/app/share"} element={<SharesScreen />}/>
            <Route path={"/app/share/new"} element={<NewShareScreen />}/>
            <Route path={"/app/share/copy/:copyId"} element={<CopyScreen />}/>
            <Route path={"/share/:shareId"} element={<ShareScreen />}/>

            <Route path={"/app/user/auth/spotify"} element={<SpotifyAuthScreen />}/>
            <Route path={"/callbacks/spotify"} element={<SpotifyAuthCallback />}/>

            <Route path={"/app/user/auth/applemusic"} element={<AppleMusicAuthScreen />}/>

            <Route path={"/app/user/settings"} element={<UserSettingsScreen/>}/>
        </Routes>
    );
};

export default App;
