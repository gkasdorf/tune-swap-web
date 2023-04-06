import React, {useEffect, useState} from "react";
import "bootstrap";
import "./NavBar.css";
import {Button, Container, Nav, Navbar, NavDropdown, NavLink} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';
import User from "../../models/User";

const NavBar = () => {
    const [isAuthed, setIsAuthed] = useState(User.isSet());

    const navigate = useNavigate();

    useEffect(() => {
        setIsAuthed(User.isSet());
    }, []);

    const logout = async () => {
        await User.clear();
        navigate("/home");
    }

    return (
        <>
            <Navbar collapseOnSelect expand={"md"} bg={"dark"} variant={"light"}>
                <Container>
                    <LinkContainer to={"/home"}>
                        <Navbar.Brand>TuneSwap</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id={"responsive-navbar-nav"}>
                        <Nav className={"me-auto"}>
                            {!isAuthed &&
                                <>
                                    <LinkContainer to={"/home"}>
                                        <Nav.Link>Home</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to={"/features"}>
                                        <Nav.Link>Features</Nav.Link>
                                    </LinkContainer>
                                </>
                            }
                            {isAuthed &&
                                <>
                                    <LinkContainer to={"/app/dash"}>
                                        <Nav.Link>Dashboard</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to={"/app/swap"}>
                                        <Nav.Link>Swap</Nav.Link>
                                    </LinkContainer>
                                    {/*<LinkContainer to={"/app/discover"}>*/}
                                    {/*    <Nav.Link>Discover</Nav.Link>*/}
                                    {/*</LinkContainer>*/}
                                </>
                            }
                        </Nav>
                        <Nav className={"mr-auto"}>
                            {!isAuthed &&
                                <>
                                    <LinkContainer to={"/signin"}>
                                        <Nav.Link><Button variant={"primary"} size={"sm"}>Sign In</Button></Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to={"/signup"}>
                                        <Nav.Link><Button variant={"primary"} size={"sm"}>Sign Up</Button></Nav.Link>
                                    </LinkContainer>
                                </>
                            }
                            {isAuthed &&
                                <>
                                    <Nav.Link><a onClick={logout}>Sign Out</a></Nav.Link>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;