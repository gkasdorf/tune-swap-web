import React, {useState} from "react";
import NavBar from "../navbar/NavBar";
import {Alert, Button, ButtonGroup, Card, Col, Container, Form, Row} from "react-bootstrap";
import Footer from "../footer/Footer";
import "./Signin.css";
import Authentication from "../../api/Authentication";
import {Link, useNavigate} from "react-router-dom";
import User from "../../models/User";

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        // Prevent default
        e.preventDefault();

        // Get signin response
        const res = await Authentication.signin({
            email: email,
            password: password
        });

        // Check if successful
        if(res.data.code !== 1000) {
            if(res.data.code === 2000 || res.data.code === 2001) {
                setAlertVisible(true);
                setAlertMessage("The email or password you have entered is incorrect.");
            }
        } else {
            const user = new User({
                name: res.data.data.name,
                email: res.data.data.email,
                apiToken: res.data.data.api_token
            });

            await user.store();

            navigate("/app");
        }
    }

    return (
        <div className={"App"}>
            <NavBar />
            <div className={"body"}>
                <Container>
                    <div className={"form"} onSubmit={handleSubmit}>
                        <Row>
                            <Col lg={{offset: 3, span: 6}} md={{offset: 2, span: 8}} sm={{offset: 1, span: 10}}>
                                <Card>
                                    <Card.Header>
                                        <h3 className={"text-center"}>Sign In</h3>
                                    </Card.Header>
                                    <Card.Body>
                                        <Alert show={alertVisible} variant={alertType}>
                                            {alertMessage}
                                        </Alert>
                                        <Form>
                                            <Form.Group>
                                                <Form.Label>Email Address</Form.Label>
                                                <Form.Control type={"email"} placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
                                            </Form.Group>
                                            <br />
                                            <Form.Group>
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type={"password"} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)}/>
                                            </Form.Group>
                                            <br />
                                            <span><Link href={"/forgot"}>Forgot your password?</Link></span>
                                            <Button variant={"primary"} type={"submit"} className={"float-end"}>
                                                Sign In
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

export default Signin;