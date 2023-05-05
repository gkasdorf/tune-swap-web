import React, {useEffect, useState} from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setSwapTo} from "../../../slices/swapSlice";
import HasApi from "../../../api/user/HasApi";
import Dialog from "../../ui/dialog/Dialog";
import DialogTitle from "../../ui/dialog/DialogTitle";
import SwapServiceButton from "./SwapServiceButton";
import TidalModal from "./authScreens/TidalModal";
import {showAuth} from "../../../helpers/showAuth";

const SwapStepThreeScreen = () => {
    const { from, playlistName, playlistId } = useSelector(state => state.swap);

    const [tidalModalVisible, setTidalModalVisible] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Make sure the data is set
        if(!from) {
            navigate("/app/swap/step-one");
            return;
        }

        if(!playlistName || !playlistId) {
            navigate("/app/swap/step-two");
        }
    }, []);

    const onServiceClick = async (service) => {
        if(service === from) {
            alert("You cannot swap to the same service you are swapping from.");
            return;
        }

        const has = await HasApi.check(service);

        if(!has) {
            showAuth(service, setTidalModalVisible);
            return;
        }

        // Set the from service and redirect to next step
        dispatch(setSwapTo(service));
        navigate("/app/swap/step-four");
    };

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 pb-20 lg:px-8"}>
                        <Dialog max={"max-w-4xl"}>
                            <DialogTitle>
                                Where are you swapping to?
                            </DialogTitle>
                            <div className={"flex flex-wrap"}>
                                <SwapServiceButton service={"Spotify"} onClick={() => onServiceClick("Spotify")}/>
                                <SwapServiceButton service={"Tidal"} onClick={() => onServiceClick("Tidal")}/>
                                <SwapServiceButton service={"Apple Music"} onClick={() => onServiceClick("Apple Music")}/>
                            </div>
                        </Dialog>
                    </div>
                </div>
                <TidalModal setVisible={setTidalModalVisible} visible={tidalModalVisible} />
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default SwapStepThreeScreen;