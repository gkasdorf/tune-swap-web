import {useEffect, useState} from "react";
import {Button, Card, Col, Container, Row, Spinner} from "react-bootstrap";
import Visibility from "../../Visibility";
import ProtectedRouteContainer from "../ProtectedRouteContainer";
import Spotify from "../../../api/app/Spotify";

const SpotifyAuthCallback = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const spotifyCode = queryParams.get("code");
    const [isLoading, setIsLoading] = useState(true);

    const doAuth = async () => {
        await Spotify.doAuth(spotifyCode);

        setIsLoading(false);
    }

    useEffect(() => {
        doAuth();
    }, []);

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
                                <h3 className={"text-center"}>Spotify Authentication</h3>
                            </Card.Header>
                            <Card.Body>
                                <Visibility visible={isLoading}>
                                    <div className={"d-flex justify-content-center"}>
                                        <Spinner animation={"border"} role={"status"}/>
                                    </div>
                                    <br/>
                                    <div className={"text-center"}>
                                        <span>Authenticating...</span>
                                    </div>
                                </Visibility>
                                <Visibility visible={!isLoading}>
                                    <p className={"text-center"}>Authentication complete! You may close this window now.
                                    Select this service again inside of your swap.</p>
                                    <div className={"text-center"}>
                                        <Button onClick={click} className={"mx-auto"}>Close Window</Button>
                                    </div>
                                </Visibility>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </ProtectedRouteContainer>
    );
};

export default SpotifyAuthCallback;