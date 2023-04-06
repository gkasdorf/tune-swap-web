import Visibility from "../../Visibility";
import {Card, Row} from "react-bootstrap";
import ServiceCard from "../dash/ServiceCard";
import MusicService from "../../../models/MusicService";
import UserApi from "../../../api/UserApi";
import OpenAuth from "./OpenAuth";

const SwapStepThree = ({visible, fromService, setToService, setCurrentStep}) => {
    const click = async (service) => {
        const hasRes = await UserApi.hasService(service);

        if(!hasRes.data.has) {
            OpenAuth(service);

            return;
        }

        setToService(service);
        setCurrentStep("four");
    };

    return (
        <Visibility visible={visible}>
            <Card>
                <Card.Header>
                    <h3 className={"text-center"}>Where are you swapping to?</h3>
                </Card.Header>
                <Card.Body>
                    <Row className={"gy-3"}>
                        <ServiceCard service={MusicService.Spotify} onClick={() => click(MusicService.Spotify)} />
                        <ServiceCard service={MusicService.AppleMusic} onClick={() => click(MusicService.AppleMusic)} />
                    </Row>
                </Card.Body>
            </Card>
        </Visibility>
    );
}

export default SwapStepThree;