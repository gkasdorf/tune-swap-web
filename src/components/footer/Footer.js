import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Twitter, Mastodon, Reddit, Github, Discord} from "react-bootstrap-icons";
import "./Footer.css";
import {Link} from "react-router-dom";
import {CookieConsent} from "react-cookie-consent";

const Footer = () => {
    return (
        <div className={"footer"}>
            <Container fluid>
                <Row className={"footer-social gy-3"}>
                    <Col md={{span: 4, offset: 2}} sm={12}>
                        <div className={"text-md-start"}>
                            <span className={"text-sm-center"}>Connect with us on social media</span>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className={"text-md-end text-sm-center"}>
                            <a href={"https://discord.gg/7AJNgwk7vQ"} className={"social"}><span className={"social-icon"}><Discord size={30}/></span></a>
                            <a href={"https://twitter.com/TuneSwapApp"} className={"social"}><span className={"social-icon"}><Twitter size={30} /></span></a>
                            <a href={"https://reddit.com/u/gk907"} className={"social"}><span className={"social-icon"}><Reddit size={30} /></span></a>
                            <a href={"https://mastodon.social/@TuneSwap"} className={"social"}><span className={"social-icon"}><Mastodon size={30} /></span></a>
                            <a href={"https://github.com/gkasdorf"} className={"social"}><span className={"social-icon"}><Github size={30} /></span></a>
                        </div>
                    </Col>
                </Row>
                <Row className={"gy-3"}>
                    <Col md={3} sm={12}>
                        <div className={"text-start align-items-start"}>
                            <h3>TuneSwap</h3>
                            <Link to={"https://apps.apple.com/us/app/tuneswap/id6447500724"}><img src={"/DownloadOnAppStore.svg"} alt={"Download on the App Store"} /></Link>
                            <Link to={"https://www.buymeacoffee.com/gavink"} target={"_blank"}><img src="/bmc.png" alt="Buy Me A Coffee" style={{width: "10em"}}/></Link>
                        </div>
                    </Col>
                    <Col md={3} sm={12}>
                        <div className={"text-start align-items-start"}>
                            <h3>About</h3>
                            <Link to={"/home"}>Home</Link>
                            <Link to={"/features"}>Features</Link>
                            <Link to={"https://status.tuneswap.app"}>Status</Link>
                            {/*<Link to={"/pricing"}>Pricing</Link>*/}
                        </div>
                    </Col>
                    <Col md={3} sm={12}>
                        <div className={"text-start align-items-start"}>
                            <h3>Legal</h3>
                            <Link to={"/terms"}>Terms of Service</Link>
                            <Link to={"/privacy"}>Privacy Policy</Link>
                        </div>
                    </Col>
                    <Col md={3} sm={12}>
                        <div className={"text-start align-items-start"}>
                            <h3>Contact</h3>
                            <Link to={"https://github.com/gkasdorf/tune-swap-web/issues"}>Report a Bug</Link>
                            {/*<Link to={"/billing"}>Billing</Link>*/}
                            <Link to={"https://github.com/gkasdorf/tune-swap-web/issues"}>Feedback</Link>
                            <Link to={"https://trello.com/b/dOEkVxW7/tuneswap"}>Roadmap</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className={"text-center"} style={{paddingTop: "1em"}}>
                        <p>Copyright &copy; 2023 TuneSwap. All Rights Reserved.</p>
                        <p>Google Play and the Google Play logo are trademarks of Google LLC. App Store and the Apple
                         logo are trademarks of Apple Inc.</p>
                    </Col>
                </Row>
            </Container>
            <CookieConsent
                location={"bottom"}
                buttonText={"Accept"}
                cookieName={"acceptCookies"}
                style={{background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
                TuneSwap uses cookies to enhance the user experience. By continuing to use TuneSwap you are agreeing that
                you allow us to use cookies for this purpose.
            </CookieConsent>
        </div>
    );
}

export default Footer;