import ProtectedRoute from "../../../AuthProvider";
import NavBar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import SwapStepOne from "./SwapStepOne";
import MusicService from "../../../models/MusicService";
import SwapStepTwo from "./SwapStepTwo";
import SwapStepThree from "./SwapStepThree";
import SwapStepFour from "./SwapStepFour";
import ProtectedRouteContainer from "../ProtectedRouteContainer";

const CreateSwap = () => {
    const [fromService, setFromService] = useState(null);
    const [toService, setToService] = useState(null);
    const [playlist, setPlaylist] = useState(null);

    const [currentStep, setCurrentStep] = useState("one");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentStep]);

    return (
        <ProtectedRouteContainer fluid={"sm"}>
            <Row>
                <Col lg={{offset: 1, span: 10}}>
                    <SwapStepOne visible={currentStep === "one"} setCurrentStep={setCurrentStep} setFromService={setFromService} />
                    <SwapStepTwo visible={currentStep === "two"} fromService={fromService} setCurrentStep={setCurrentStep} setPlaylist={setPlaylist} />
                    <SwapStepThree visible={currentStep === "three"} fromService={fromService} setCurrentStep={setCurrentStep} setToService={setToService} />
                    <SwapStepFour visible={currentStep === "four"} swapParams={{
                        fromService: fromService,
                        toService: toService,
                        playlist: playlist
                    }} />
                </Col>
            </Row>
        </ProtectedRouteContainer>
    );
}

export default CreateSwap;