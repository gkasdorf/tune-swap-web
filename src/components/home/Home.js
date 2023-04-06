import React, {useEffect} from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import {Alert, Button, Card, Col, Container, Row} from "react-bootstrap";
import "./Home.css";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className={"App"}>
            <NavBar />
            <div className={"body"}>
                <Container>
                    <Row>
                        <Col sm={12} fluid={"md"}>
                            <Alert variant={"primary"}>
                                TuneSwap is currently <b>in an alpha state</b>. Although functional,
                                some features may not be available and you may find that we are currently unable to find
                                some songs. We are using this stage to improve our search functionality.
                                <br /><br />
                                Additionally, it may take some time for swaps to complete, as we are building our cache
                                of data. Again, we are using this stage to build up our cache so that we can offer an
                                even faster experience in the future.
                                <br /><br />
                                If you discover any issues or have any ideas, we ask you to please reach out to us
                                at <a href={"mailto:support@tuneswap.app"}>support@tuneswap.app</a>. This is an open source
                                project and we are striving to provide this service at the lowest cost possible, as
                                opposed to other similar services.
                                <br /><br />
                                <b>For more information, please visit <a href={"https://github.com/gkasdorf/tune-swap-web/blob/main/README.md"}>the readme on GitHub</a>.</b>
                            </Alert>
                        </Col>
                    </Row>
                </Container>
                <div className={"hero"}>
                    <Container fluid>

                        <Row>
                        {/*<Col md={{span: 5, offset: 1}} sm={12}>*/}
                        {/*    <p>Hero Image</p>*/}
                        {/*</Col>*/}
                        <Col md={{offset: 2, span: 10}} sm={12}>
                            <h1>Swaps. Made. <span className={"primary bold"}>Easy.</span></h1>
                            <p>Transfer, share, and discover. No matter which music service you use. Get started today.</p>
                            <p>Oh, and it's free.</p>
                            {/*<Button variant={"secondary"}>Download the App</Button>&nbsp;&nbsp;*/}
                            <a href={"/signup"}><Button variant={"primary"}>Sign Up For Free</Button></a>&nbsp;&nbsp;
                            <a href={"/signin"}><Button variant={"secondary"}>Have an account?</Button></a>
                        </Col>
                        </Row>
                    </Container>
                </div>

                <div className={"howItWorks"}>
                    <Container>
                        <Row style={{paddingBottom: "2em"}}>
                            <Col sm={12}>
                                <h2 className={"text-center bold primary"}>How it Works</h2>
                            </Col>
                        </Row>
                        <Row className={"gy-3"}>
                            <Col lg={3} md={6} sm={12}>
                                <Card className={"shadow-lg"}>
                                    <Card.Body>
                                        <h4 className={"text-center"}>Link Your Accounts</h4>
                                        <p style={{textJustify: "auto"}} className={"text-center"}>Add your music service
                                            accounts to TuneSwap so we can see your playlists and create new ones. We don't
                                            ask for any other permissions!</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <Card className={"shadow-lg"}>
                                    <Card.Body>
                                        <h4 className={"text-center"}>Select Your Playlist</h4>
                                        <p style={{textJustify: "auto"}} className={"text-center"}>Select the playlist that
                                        you want to swap to another service. Whether it's your own playlist, your friend's,
                                        or one you just discovered, you'll be able to swap it!</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <Card className={"shadow-lg"}>
                                    <Card.Body>
                                        <h4 className={"text-center"}>Give Us a Second...</h4>
                                        <p style={{textJustify: "auto"}} className={"text-center"}>It takes us a minute to
                                        find the music on your requested service. But the more you and others use our service,
                                        we update our library! Some swaps are finished in seconds.</p>
                                    </Card.Body>

                                </Card>
                            </Col>
                            <Col lg={3} md={6} sm={12}>
                                <Card className={"shadow-lg"}>
                                    <Card.Body>
                                        <h4 className={"text-center"}>Enjoy!</h4>
                                        <p style={{textJustify: "auto"}} className={"text-center"}>Now you can listen to
                                        your music on the new service! Optionally keep the playlist in sync with the original,
                                        share the playlist with your friends, or discover more.</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;