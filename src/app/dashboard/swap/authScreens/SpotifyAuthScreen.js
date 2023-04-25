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

const SpotifyAuthScreen = () => {
    const [spotifyUrl, setSpotifyUrl] = useState("#");

    useEffect(() => {
        getSpotifyUrl();
    }, []);

    const getSpotifyUrl = async () => {
        const res = await SpotifyApi.getAuthUrl();

        setSpotifyUrl(res.data.url);
    };

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 pt-16 pb-16 md:pb-52 sm:px-6 lg:px-8"}>
                        <Dialog max={"max-w-2xl"}>
                            <DialogTitle>
                                Spotify Authentication
                            </DialogTitle>
                            <div className={"flex flex-wrap"}>
                                <div className={"w-full text-center"}>
                                    <p className={"text-gray-600"}>
                                        We need access to your Spotify account to be able to access your playlists
                                        and songs. Please click below to be taken to Spotify for authentication.
                                    </p>
                                    <br />
                                    <Link to={spotifyUrl}><Button disabled={(spotifyUrl === "#")}>Sign In with Spotify</Button></Link>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default SpotifyAuthScreen;