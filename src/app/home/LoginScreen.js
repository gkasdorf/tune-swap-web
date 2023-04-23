import React, {useEffect} from "react";
import MainWrapper from "../wrappers/MainWrapper";
import Alert from "../ui/alert/Alert";
import {useState} from "react";
import InputWrapper from "../ui/input/InputWrapper";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {clearAuth} from "../../slices/authSlice";
import {login} from "../../slices/actions/authActions";
import UnprotectedRoute from "../wrappers/UnprotectedRoute";

const LoginScreen = () => {
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertText, setAlertText] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { loading, error, success } = useSelector(state => state.auth);

    const navigate = useNavigate();

    useEffect(() => {
        if(success) {
            navigate("/app");
        }

        if(error) {
            showAlert(error);
        }

        return () => {
            dispatch(clearAuth());
        };
    }, [error, success]);

    const showAlert = (text) => {
        setAlertText(text);
        setAlertVisible(true);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        if(!email || !password) {
            showAlert("All fields are required.");
            return;
        }

        dispatch(login({ email, password }));
    };

    return (
        <UnprotectedRoute redirect={true}>
            <MainWrapper>
                <div className={"bg-gray-100"}>
                    <div className={"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"}>
                        <div className={"flex flex-col items-center"}>
                            <div className={"w-full max-w-2xl"}>
                                <div className={"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"}>
                                    <div className={"mb-4"}>
                                        <h1 className={"text-2xl"}>Login to TuneSwap</h1>
                                    </div>
                                    <hr />
                                    <Alert variant={"warning"} visible={alertVisible}>
                                        {alertText}
                                    </Alert>
                                    <form onSubmit={onFormSubmit}>
                                        <div className={"mb-4"}>
                                            <InputWrapper>
                                                <Input type={"email"} label={"Email"} placeholder={"Enter your email"} onChange={(e) => setEmail(e.target.value)}/>
                                            </InputWrapper>
                                            <InputWrapper>
                                                <Input type={"password"} label={"Password"} placeholder={"Enter your password"} onChange={(e) => setPassword(e.target.value)}/>
                                            </InputWrapper>
                                        </div>
                                        <div className={"pt-3 pb-6"}>
                                            <div className={"flex items-center justify-between"}>
                                                <div className={"flex items-center text-sm"}>
                                                    <Link to={"/user/register"} className={"font-medium text-indigo-600 hover:text-indigo-500"}>
                                                        Create an account
                                                    </Link>
                                                </div>
                                                <div className={"text-sm"}>
                                                    <Link to={"/user/login/forgot"} className={"font-medium text-indigo-600 hover:text-indigo-500"}>
                                                        Forgot your password?
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={"mt-6"}>
                                                <Button type={"submit"} variant={"primary"} className={"w-full"} disabled={loading}>Log In</Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </UnprotectedRoute>
    );
};

export default LoginScreen;