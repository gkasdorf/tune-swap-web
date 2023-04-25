/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import Modal from "../../../ui/modal/Modal";
import ProtectedRoute from "../../../wrappers/ProtectedRoute";
import MainWrapper from "../../../wrappers/MainWrapper";
import Dialog from "../../../ui/dialog/Dialog";
import DialogTitle from "../../../ui/dialog/DialogTitle";
import PropTypes from "prop-types";
import Button from "../../../ui/button/Button";
import SpotifyApi from "../../../../api/app/SpotifyApi";
import {Link} from "react-router-dom";

const AppleMusicAuthScreen = () => {
    const qp = new URLSearchParams(window.location.search);
    const complete = qp.get("complete");

    useEffect(() => {
        if(!complete) {
            const script = document.createElement("script");

            script.src = "/appleMusic.js";
            script.async = true;

            document.body.appendChild(script);
        }
    }, []);

    const onCloseClick = () => setTimeout(window.close);

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 pt-16 pb-16 md:pb-52 sm:px-6 lg:px-8"}>
                        <Dialog max={"max-w-2xl"}>
                            <DialogTitle>
                                Apple Music Authentication
                            </DialogTitle>
                            <div className={"flex flex-wrap"}>
                                <div className={"w-full text-center"}>
                                    {
                                        !complete ? (
                                            <>
                                                <p className={"text-gray-600"}>
                                                    We need access to your Apple Music account to be able to access your playlists
                                                    and songs. Please click below to be taken to Apple for authentication.
                                                </p>
                                                <br />
                                                <div id={"authorize"}></div>
                                            </>
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

export default AppleMusicAuthScreen;