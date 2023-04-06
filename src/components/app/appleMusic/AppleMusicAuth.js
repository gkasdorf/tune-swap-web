import ProtectedRouteContainer from "../ProtectedRouteContainer";
import {Button, Card, Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import Visibility from "../../Visibility";

const AppleMusicAuth = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const complete = queryParams.get("complete");

    const [isAuthing, setIsAuthing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if(!complete) {
            const script = document.createElement('script');

            script.src = "/appleMusic.js";
            script.async = true;

            document.body.appendChild(script);
        }
    }, [])

    const click = () => {
        setTimeout(window.close);
    }

    return (
        <ProtectedRouteContainer>
            <div className={"mt-md-5"}>
                <Row>
                    <Col md={{offset: 1, span: 10}} sm={12}>
                        <Card>
                            <Card.Header>
                                <h3 className={"text-center"}>Apple Music Authentication</h3>
                            </Card.Header>
                            <Card.Body>
                                <Visibility visible={!complete}>
                                    <div className={"text-center"}>
                                        <p>Please click below to being Apple Music authentication</p>
                                        <div id={"authorize"}>

                                        </div>
                                    </div>
                                </Visibility>
                                <Visibility visible={complete}>
                                    <div className={"text-center"}>
                                        <p className={"text-center"}>Authentication complete! You may close this window now.
                                            Select this service again inside of your swap.</p>
                                        <div className={"text-center"}>
                                            <Button onClick={click} className={"mx-auto"}>Close Window</Button>
                                        </div>
                                    </div>
                                </Visibility>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </ProtectedRouteContainer>
    )
}

export default AppleMusicAuth;