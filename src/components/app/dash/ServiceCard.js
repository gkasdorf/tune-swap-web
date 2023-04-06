import {Card, Col} from "react-bootstrap";
import MusicServiceLogo from "../../../models/MusicServiceLogo";

const ServiceCard = ({service, onClick}) => {

    return (
        <Col lg={3} md={4} sm={6}>
            <Card className={"serviceCard"} onClick={onClick}>
                <object data={MusicServiceLogo(service)} />
            </Card>
        </Col>
    );
}

export default ServiceCard;