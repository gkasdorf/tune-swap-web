import Visibility from "../../Visibility";
import {Button, Card, Modal, Row} from "react-bootstrap";
import ServiceCard from "../dash/ServiceCard";
import MusicService from "../../../models/MusicService";
import UserApi from "../../../api/UserApi";
import OpenAuth from "./OpenAuth";
import {ChevronLeft} from "react-bootstrap-icons";
import {useState} from "react";
import TidalModal from "./TidalModal";

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

            <TidalModal setShowTidalModal={setShowTidalModal} showTidalModal={showTidalModal} />
        </Visibility>
    );
}

export default SwapStepThree;