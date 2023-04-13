import {Button, Card, Modal, Row} from "react-bootstrap";
import Visibility from "../../Visibility";
import MusicService from "../../../models/MusicService";
import ServiceCard from "../dash/ServiceCard";
import UserApi from "../../../api/UserApi";
import OpenAuth from "./OpenAuth";
import {useState} from "react";
import TidalModal from "./TidalModal";

const SwapStepOne = ({visible, setCurrentStep, setFromService}) => {
    const [showTidalModal, setShowTidalModal] = useState(false);

    const click = async (service) => {
        const hasRes = await UserApi.hasService(service);

        if(!hasRes) {
            OpenAuth(service, setShowTidalModal);

            return;
        }

        setFromService(service);
        setCurrentStep("two");
    };

    return (
        <Visibility visible={visible}>
            <Card>
                <Card.Header>
                    <h3 className={"text-center"}>Where are you swapping from?</h3>
                </Card.Header>
                <Card.Body>
                    <Row className={"gy-3"}>
                        <ServiceCard service={MusicService.Spotify} onClick={() => click(MusicService.Spotify)} />
                        <ServiceCard service={MusicService.AppleMusic} onClick={() => click(MusicService.AppleMusic)} />
                        <ServiceCard service={MusicService.Tidal} onClick={() => click(MusicService.Tidal)} />
                    </Row>
                </Card.Body>
            </Card>
            <TidalModal showTidalModal={showTidalModal} setShowTidalModal={setShowTidalModal} />
        </Visibility>
    );
}

export default SwapStepOne;