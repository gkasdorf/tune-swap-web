/* eslint-disable */
import React, {useEffect} from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import DialogTitle from "../../ui/dialog/DialogTitle";
import SwapServiceButton from "./SwapServiceButton";
import {useNavigate} from "react-router-dom";
import {clearSwap, setSwapFrom} from "../../../slices/swapSlice";
import {useDispatch} from "react-redux";
import HasApi from "../../../api/user/HasApi";
import {showAuth} from "../../../helpers/showAuth";

const SwapStepOneScreen = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        // Make sure we start with a clear swap
        dispatch(clearSwap());
    }, []);

    const onServiceClick = async (service) => {
        const has = await HasApi.check(service);

        if(!has) {
            showAuth(service);
            return;
        }

        // Set the from service and redirect to next step
        dispatch(setSwapFrom(service));
        navigate("/app/swap/step-two");
    };

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 pb-20 lg:px-8"}>
                        <Dialog max={"max-w-4xl"}>
                            <DialogTitle>
                                Where are you swapping from?
                            </DialogTitle>
                            <div className={"flex flex-wrap"}>
                                <SwapServiceButton service={"Spotify"} onClick={() => onServiceClick("Spotify")}/>
                                <SwapServiceButton service={"Tidal"} onClick={() => onServiceClick("Tidal")}/>
                                <SwapServiceButton service={"Apple Music"} onClick={() => onServiceClick("Apple Music")}/>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default SwapStepOneScreen;