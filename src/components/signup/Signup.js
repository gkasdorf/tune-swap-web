import React, {useState} from "react";
import NavBar from "../navbar/NavBar";
import {Alert, Button, ButtonGroup, Card, Col, Container, Form, Row} from "react-bootstrap";
import Footer from "../footer/Footer";
import "./Signup.css";
import Authentication from "../../api/Authentication";
import {Link, useNavigate} from "react-router-dom";
import User from "../../models/User";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    const [alertMessage, setAlertMessage] = useState("");
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertType, setAlertType] = useState("danger");

    const navigate = useNavigate();

    /**
     * Handle form submission
     * @param e
     * @returns {Promise<void>}
     */
    const handleSubmit = async (e) => {
        // Prevent form submission
        e.preventDefault();

        // Make sure all fields are set
        if(!name || !email || !password || !passwordAgain) {
            setAlertVisible(true);
            setAlertMessage("All fields are required.");
            return;
        }

        // Make sure passwords match
        if(password !== passwordAgain) {
            setAlertVisible(true);
            setAlertMessage("Passwords must match.");
            return;
        }

        // Get the result of the signup
        const res = await Authentication.signup({
            name: name,
            email: email,
            password: password,
            passwordAgain: passwordAgain
        });

        // Check if there was success
        if(res.data.code !== 1000) {
            if(res.data.code === 2002) {
                setAlertVisible(true);
                setAlertMessage("The email you used is already in use.");
            }
        } else {
            // Authenticate user
            const user = new User({
                name: res.data.data.name,
                email: res.data.data.email,
                apiToken: res.data.data.api_token
            });

            await user.store();

            navigate("/app/welcome");
        }
    }

    return (
        <div className={"App"}>
            <NavBar />
            <div className={"body"}>
                <Container>
                    <div className={"form"}>
                        <Row>
                            <Col lg={{offset: 3, span: 6}} md={{offset: 2, span: 8}} sm={{offset: 1, span: 10}}>
                                <Card>
                                    <Card.Header>
                                        <h3 className={"text-center"}>Sign Up</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Alert show={alertVisible} variant={alertType}>
                                            {alertMessage}
                                        </Alert>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group>
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type={"text"} placeholder={"Name"} onChange={(e) => setName(e.target.value)}/>
                                            </Form.Group>
                                            <br />
                                            <Form.Group>
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type={"email"} placeholder={"Email"} onChange={(e) => setEmail(e.target.value)}/>
                                            </Form.Group>
                                            <br />
                                            <Form.Group>
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type={"password"} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)}/>
                                            </Form.Group>
                                            <br />
                                            <Form.Group>
                                                <Form.Label>Password Again</Form.Label>
                                                <Form.Control type={"password"} placeholder={"Password Again"} onChange={(e) => setPasswordAgain((e.target.value))}/>
                                            </Form.Group>
                                            <br />
                                            <p>By signing up, you agree to our <a href={"/terms"}>Terms of Service.</a></p>
                                            <span><Link to={"/signin"}>Have an account?</Link></span>
                                            <Button variant={"primary"} type={"submit"} className={"float-end"}>
                                                Sign Up
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Signup;