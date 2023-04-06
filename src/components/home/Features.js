import UnprotectedRouteContainer from "../app/UnprotectedRouteContainer";
import {Col, Row} from "react-bootstrap";

const Features = () => {
    return (
        <UnprotectedRouteContainer>
            <Row>
                <Col sm={12}>
                    <h2 className={"text-center"}>What is TuneSwap?</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={{offset: 3, span: 6}}>
                    <div className={"text-center"}>
                        <p>TuneSwap is a service that lets you transfer your music between services, share playlists with
                        your friends on other services, and discover new music across all platforms!</p>
                        <h5>Ever wish you could listen to those great playlists that Spotify puts together but you're
                        using Apple Music? Or what about that 🔥🔥 playlist your friend was banging in the car. But...
                         she's using Tidal!</h5>
                        <h5><b>No longer a problem!</b></h5>
                    </div>
                </Col>
            </Row>
        </UnprotectedRouteContainer>
    )
};

export default Features;