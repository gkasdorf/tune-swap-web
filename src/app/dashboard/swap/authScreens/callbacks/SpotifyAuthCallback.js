import React, {useEffect, useState} from "react";
import SpotifyApi from "../../../../../api/app/SpotifyApi";
import ProtectedRoute from "../../../../wrappers/ProtectedRoute";
import MainWrapper from "../../../../wrappers/MainWrapper";
import Dialog from "../../../../ui/dialog/Dialog";
import DialogTitle from "../../../../ui/dialog/DialogTitle";
import Button from "../../../../ui/button/Button";

const SpotifyAuthCallback = () => {
    const qp = new URLSearchParams(window.location.search);
    const spotifyCode = qp.get("code");

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        doAuth();
    }, []);

    const doAuth = async() => {
        await SpotifyApi.doAuth(spotifyCode);

        setLoading(false);
    };

    const onCloseClick = () => {
        setTimeout(window.close);
    };

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 pt-16 pb-16 md:pb-52 sm:px-6 lg:px-8"}>
                        <Dialog max={"max-w-2xl"}>
                            <DialogTitle>
                                Authentication Complete
                            </DialogTitle>
                            <div className={"flex"}>
                                <div className={"w-full text-center"}>
                                    {
                                        loading ? (
                                            <p>Please wait while we finish the authentication process...</p>
                                        ) : (
                                            <>
                                                <p>Thank you for authenticating. You may now close this window.</p>
                                                <br />
                                                <Button onClick={onCloseClick}>Close Window</Button>
                                            </>
                                        )
                                    }

                                </div>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default SpotifyAuthCallback;

