import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from "../ui/button/Button";
import {useDispatch, useSelector} from "react-redux";
import Dropdown from "../ui/dropdown/Dropdown";
import DropdownItem from "../ui/dropdown/DropdownItem";
import {clearUser} from "../../slices/userSlice";

const NavBarComponent = () => {
    const { name, email, isAuthed } = useSelector(state => state.user);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onLogoutClick = () => {
        dispatch(clearUser());

        navigate("/");
    };

    return (
        <>
            <header aria-label="Site Header" className="shadow-sm">
                <div className={"mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4"}>
                    {
                        isAuthed ? (
                            <nav className={"flex items-center"}>
                                <Link to={"/app"} className={"flex items-center"}>
                                    <span className={"text-xl font-bold text-indigo-500"}>TuneSwap</span>
                                </Link>

                                <div className={"pl-4"}>
                                    <Link to={"/app"} className={"text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"}>Dashboard</Link>
                                    <Link to={"/app/swap"} className={"text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"}>Swap</Link>
                                    <Link to={"/app/sync"} className={"text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"}>Sync</Link>
                                    <Link to={"/app/discover"} className={"text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"}>Discover</Link>
                                </div>
                            </nav>
                        ) : (
                            <nav className={"flex items-center"}>
                                <Link to={"/"} className={"flex items-center"}>
                                    <span className={"text-xl font-bold text-indigo-500"}>TuneSwap</span>
                                </Link>

                                <div className={"pl-4"}>
                                    <Link to={"/"} className={"text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"}>Home</Link>
                                    <Link to={"/about"} className={"text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"}>About</Link>
                                    <Link to={"/features"} className={"text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"}>Features</Link>
                                    <Link to={"/pricing"} className={"text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"}>Pricing</Link>
                                </div>
                            </nav>
                        )
                    }
                    {
                        isAuthed ? (
                            <nav className={"flex items-center"}>
                                <Dropdown text={name} headerTop={"Signed in as"} headerBottom={email}>
                                    <DropdownItem to={"/app/user/billing"}><span>Billing</span></DropdownItem>
                                    <DropdownItem to={"/app/user/settings"}><span>Settings</span></DropdownItem>
                                    <hr />
                                    <DropdownItem onClick={onLogoutClick}><span>Logout</span></DropdownItem>
                                </Dropdown>
                            </nav>
                        ) : (
                            <nav className={"flex items-center"}>
                                <Link to={"/login"} className={"text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"}><Button>Login</Button></Link>
                                <Link to={"/signup"} className={"text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-md font-medium"}><Button>Register</Button></Link>
                            </nav>
                        )
                    }

                </div>
            </header>
        </>
    );
};

export default NavBarComponent;