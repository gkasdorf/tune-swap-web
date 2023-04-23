import React, {useEffect} from "react";
import MainWrapper from "../wrappers/MainWrapper";
import Alert from "../ui/alert/Alert";
import {useState} from "react";
import InputWrapper from "../ui/input/InputWrapper";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {signup} from "../../slices/actions/authActions";
import {clearAuth} from "../../slices/authSlice";
import UnprotectedRoute from "../wrappers/UnprotectedRoute";

const SignupScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertText, setAlertText] = useState("");

    const { error, loading, success } = useSelector(state => state.auth);

    const dispatch = useDispatch();
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

    // eslint-disable-next-line no-unused-vars
    const showAlert = (text) => {
        setAlertText(text);
        setAlertVisible(true);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        if(!name || !email || !password || !passwordAgain) {
            showAlert("All fields are required.");
            return;
        }

        if(password !== passwordAgain) {
            showAlert("Passwords don't match.");
            return;
        }

        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!email.match(regex)) {
            showAlert("Invalid email address.");
            return;
        }

        dispatch(signup({
            name,
            email,
            password,
            passwordAgain: password
        }));
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
                                        <h1 className={"text-2xl"}>Create an account</h1>
                                    </div>
                                    <hr />
                                    <Alert variant={"warning"} visible={alertVisible}>
                                        {alertText}
                                    </Alert>
                                    <form onSubmit={onFormSubmit}>
                                        <div className={"flex flex-wrap"}>
                                            <div className={"w-full md:w-1/2 md:pr-1.5"}>
                                                <InputWrapper>
                                                    <Input type={"text"} label={"Name"} placeholder={"Enter your name"} onChange={(e) => setName(e.target.value)}/>
                                                </InputWrapper>
                                            </div>
                                            <div className={"w-full md:w-1/2 md:pl-1.5"}>
                                                <InputWrapper>
                                                    <Input type={"email"} label={"Email"} placeholder={"Enter your email"} onChange={(e) => setEmail(e.target.value)}/>
                                                </InputWrapper>
                                            </div>
                                        </div>
                                        <div className={"flex flex-wrap"}>
                                            <div className={"w-full md:w-1/2 md:pr-1.5"}>
                                                <InputWrapper>
                                                    <Input type={"password"} label={"Password"} placeholder={"Enter your password"} onChange={(e) => setPassword(e.target.value)}/>
                                                </InputWrapper>
                                            </div>
                                            <div className={"w-full md:w-1/2 md:pl-1.5"}>
                                                <InputWrapper>
                                                    <Input type={"password"} label={"Confirm Password"} placeholder={"Confirm your password"} onChange={(e) => setPasswordAgain(e.target.value)}/>
                                                </InputWrapper>
                                            </div>
                                        </div>
                                        <div className={"pt-3 pb-6"}>
                                            <div className={"flex items-center justify-between"}>
                                                <div className={"flex items-center text-sm"}>
                                                    <Link to={"/login"} className={"font-medium text-indigo-600 hover:text-indigo-500"}>
                                                        Have an account?
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={"mt-6"}>
                                                <Button type={"submit"} variant={"primary"} className={"w-full"} disabled={loading}>Sign Up</Button>
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

export default SignupScreen;