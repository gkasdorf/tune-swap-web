import React, {useEffect, useState} from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import DialogTitle from "../../ui/dialog/DialogTitle";
import {useDispatch, useSelector} from "react-redux";
import InputWrapper from "../../ui/input/InputWrapper";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import {startSwap} from "../../../slices/actions/swapActions";
import {useNavigate} from "react-router-dom";
import Alert from "../../ui/alert/Alert";

const SwapStepFourScreen = () => {
    const { from, to, playlistName, playlistId, playlistDescription } = useSelector(state => state.swap);
    const { loading, error, success, swapId } = useSelector(state => state.swap);

    const [swapName, setSwapName] = useState(playlistName);
    const [swapDescription, setSwapDescription] = useState(playlistDescription);

    const [alertText, setAlertText] = useState("");
    const [alertVisible, setAlertVisible] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(!from || !to || !playlistName || !playlistId) {
            navigate("/app/swap/step-one");
        }
    }, []);

    useEffect(() => {
        if(error) {
            showError(error);
        }

        if(success) {
            navigate(`/app/swap/${swapId}`);
        }
    }, [error, success]);

    const showError = (error) => {
        setAlertText(error);
        setAlertVisible(true);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(startSwap({
            from_service: from,
            to_service: to,
            playlist_name: playlistName,
            from_playlist_id: playlistId,
            description: playlistDescription
        }));
    };

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 pb-20 lg:px-8"}>
                        <Dialog max={"max-w-4xl"}>
                            <DialogTitle>
                                Almost there...
                            </DialogTitle>
                            <Alert visible={alertVisible}>
                                {alertText}
                            </Alert>
                            <form onSubmit={onFormSubmit}>
                                <div className={"flex flex-wrap"}>
                                    <div className={"w-full md:w-1/2 md:pr-1.5"}>
                                        <InputWrapper>
                                            <Input label={"Playlist name"} value={swapName} onChange={e => setSwapName(e.target.value)}/>
                                        </InputWrapper>
                                    </div>
                                    <div className={"w-full md:w-1/2 md:pl-1.5"}>
                                        <InputWrapper>
                                            <Input label={"Playlist description"} value={swapDescription} onChange={e => setSwapDescription(e.target.value)} />
                                        </InputWrapper>
                                    </div>
                                </div>
                                <p>
                                    Swaps generally take between 5 seconds to 5 minutes to complete, depending on the
                                    size of the playlist and how popular the songs are.
                                </p>

                                <div className={"flex justify-center items-center mt-5"}>
                                    <Button type={"submit"} disabled={loading}>Start Swap</Button>
                                </div>
                            </form>
                        </Dialog>
                    </div>
                </div>
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default SwapStepFourScreen;