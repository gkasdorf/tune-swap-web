import Visibility from "../../Visibility";
import {Button, Card, Modal, Row} from "react-bootstrap";
import ServiceCard from "../dash/ServiceCard";
import MusicService from "../../../models/MusicService";
import UserApi from "../../../api/UserApi";
import OpenAuth from "./OpenAuth";
import {ChevronLeft} from "react-bootstrap-icons";
import {useState} from "react";

const SwapStepThree = ({visible, fromService, setToService, setCurrentStep}) => {
    const [showTidalModal, setShowTidalModal] = useState(false);

    const click = async (service) => {
        const hasRes = await UserApi.hasService(service);

        if(!hasRes) {
            OpenAuth(service, setShowTidalModal);

            return;
        }

        setToService(service);
        setCurrentStep("four");
    };

    const backClick = () => {
        setCurrentStep("two");
    }

    return (
        <Visibility visible={visible}>
            <Card>
                <Card.Header>
                    <Button className={"float-start"} size={"sm"} variant={"dark"} onClick={backClick}><ChevronLeft />Back</Button>
                    <h3 className={"text-center"}>Where to?</h3>
                </Card.Header>
                <Card.Body>
                    <Row className={"gy-3"}>
                        <ServiceCard service={MusicService.Spotify} onClick={() => click(MusicService.Spotify)} />
                        <ServiceCard service={MusicService.AppleMusic} onClick={() => click(MusicService.AppleMusic)} />
                        <ServiceCard service={MusicService.Tidal} onClick={() => click(MusicService.Tidal)} />
                    </Row>
                </Card.Body>
            </Card>

            <Modal show={showTidalModal}>
                <Modal.Header>
                    <Modal.Title>Tidal Authentication</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Because Tidal does not offer a public API, we are not able to perform authentication with Tidal in
                        the browser. Instead, you must download our app to authenticate with Tidal.</p>

                    <p>We understand that this is not ideal, however there are currently no other options. We are in contact
                        with Tidal to attempt to obtain API access. If you like, you may reach out to Tidal and request that
                        API access be granted to TuneSwap.</p>

                    <p>Once you download the app, please sign in to your TuneSwap account and navigate to Settings->Tidal.
                        You will be presented with the Tidal login screen. Once you have successfully authenticated, you may
                        either use the app to perform your swap or just come back here and press the Tidal button again.</p>

                    <p>We are very sorry for the inconvenience!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant={"primary"} onClick={() => setShowTidalModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Visibility>
    );
}

export default SwapStepThree;