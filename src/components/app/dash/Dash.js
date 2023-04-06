import {Button, Card, Col, Container, Nav, Row} from "react-bootstrap";
import SwapsCard from "./SwapsCard";
import "./Dash.css";
import SyncsCard from "./SyncsCard";
import {Link} from "react-router-dom";
import ProtectedRouteContainer from "../ProtectedRouteContainer";

const Dash = () => {


    return (
        <ProtectedRouteContainer>
            <div className={"mt-md-5"}>
                <Row>
                    <Col md={{offset: 1, span: 10}} sm={12}>
                        <Card  className={"text-center"}>
                            <Card.Body>
                                <h3>Let's Get Started</h3>
                                <Link to={"/app/swap"}><Button className={"align-self-center"} style={{width: "50%"}}>Start a Swap</Button></Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <br />
            <Row>
                <Col md={{offset: 1, span: 5}} sm={12}>
                    <SwapsCard />
                </Col>
                <Col md={5} sm={12}>
                    <SyncsCard />
                </Col>
            </Row>
        </ProtectedRouteContainer>
    );
};

export default Dash;