import "./App.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Dash from "./components/app/dash/Dash";
import CreateSwap from "./components/app/swap/CreateSwap";
import Swap from "./components/app/swap/Swap";
import SpotifyAuthCallback from "./components/app/callbacks/SpotifyAuthCallback";
import AppleMusicAuth from "./components/app/appleMusic/AppleMusicAuth";
import Privacy from "./components/policies/Privacy";
import Terms from "./components/policies/Terms";
import Features from "./components/home/Features";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/signin"} element={<Signin />} />
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/features"} element={<Features />} />

            <Route path={"/privacy"} element={<Privacy />} />
            <Route path={"/terms"} element={<Terms />} />

            <Route path={"/callbacks/spotify"} element={<SpotifyAuthCallback />} />

            <Route path={"/app"}>
                <Route path={""} element={<Dash />} />
                <Route path={"dash"} element={<Dash />} />
                <Route path={"swap"} element={<CreateSwap />} />
                <Route path={"swap/:swapId"} element={<Swap />} />

                <Route path={"applemusic/auth"} element={<AppleMusicAuth />} />
            </Route>
        </Routes>
    );
}

export default App;
