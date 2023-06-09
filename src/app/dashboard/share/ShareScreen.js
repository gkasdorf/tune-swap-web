import React, {useEffect, useState} from "react";
import UnprotectedRoute from "../../wrappers/UnprotectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import {Link, useNavigate, useParams} from "react-router-dom";
import ShareApi from "../../../api/share/ShareApi";
import Alert from "../../ui/alert/Alert";
import Spinner from "../../ui/spinner/Spinner";
import SwapServiceButton from "../swap/SwapServiceButton";
import Headers from "../../ui/typography/Headers";
import Button from "../../ui/button/Button";
import HasApi from "../../../api/user/HasApi";
import {showAuth} from "../../../helpers/showAuth";
import TidalModal from "../swap/authScreens/TidalModal";
import MobileDetect from "mobile-detect";
import {useSelector} from "react-redux";

const ShareScreen = () => {
    const [share, setShare] = useState(null);
    const [error, setError] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    const [tidalModalVisible, setTidalModalVisible] = useState(false);

    const {shareId} = useParams();
    const {isAuthed: userAuthed} = useSelector(state => state.user);

    const navigate = useNavigate();

    let reload = null;

    useEffect(() => {
        const md = new MobileDetect(window.navigator.userAgent);

        if(md.phone()) {
            window.location.replace(`tuneswap://share/${shareId}`);
        }

        loadShare();

        return () => {
            if(reload) clearTimeout(reload);
        };
    }, []);

    const loadShare = async () => {
        const res = await ShareApi.get(shareId);

        if(!res.success) {
            setError(res.data.message);
            return;
        }

        const share = res.data.share;

        setShare(share);
        setIsOwner(res.data.isOwner);

        if(!share.ready && !reload) {
            reload = setInterval(loadShare, 3000);
        } else if (share.ready && reload) {
            clearTimeout(reload);
        }
    };

    const onServiceClick = async (service) => {
        const has = await HasApi.check(service);

        if(!has) {
            showAuth(service, setTidalModalVisible);
            return;
        }

        const res = await ShareApi.startCopy(shareId, service);

        if(!res.success) {
            setError(res.data.message);
            return;
        }

        navigate(`/app/share/copy/${res.data.copy.id}`);
    };

    const onDeleteClick = async() => {
        const res = await ShareApi.delete(shareId);

        if(!res.success) {
            setError(res.data.message);
            return;
        }

        navigate("/app/share");
    };

    return (
        <UnprotectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-lg px-4 pt-16 sm:px-6 pb-20 lg:px-8"}>
                        <Dialog>
                            {
                                error && (
                                    <Alert type={"error"} visible={error}>{error}</Alert>
                                ) || !error && !share && (
                                    <Spinner />
                                ) || !error && share && (
                                    <>
                                        {
                                            share.ready ? (
                                                <>
                                                    <div className={"text-center mb-8"}>
                                                        <div className={"flex flex-row"}>
                                                            <h1 className={"text-4xl mb-2 font-bold mx-auto"}>
                                                                {share.playlist.name}
                                                            </h1>
                                                            {
                                                                isOwner && share.ready && (
                                                                    <Button onClick={onDeleteClick}>Delete</Button>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className={"flex flex-wrap"}>
                                                        <div className={"w-1/3 text-center"}>
                                                            <Headers.h2 bold>
                                                                Total Songs
                                                            </Headers.h2>
                                                            <h3 className={"text-2xl"}>
                                                                {share.playlist.playlist_songs.length}
                                                            </h3>
                                                        </div>
                                                        <div className={"w-1/3 text-center"}>
                                                            <Headers.h2 bold>
                                                                Shared By
                                                            </Headers.h2>
                                                            <h3 className={"text-2xl"}>
                                                                {share.playlist.user.name}
                                                            </h3>
                                                        </div>
                                                        <div className={"w-1/3 text-center"}>
                                                            <Headers.h2 bold>
                                                                Total Shares
                                                            </Headers.h2>
                                                            <h3 className={"text-2xl"}>
                                                                {share.saves}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <hr className={"m-8"}/>
                                                    {
                                                        userAuthed ? (
                                                            <>
                                                                <div className={"mt-8 text-center"}>
                                                                    <h3 className="text-2xl">What service do you want to add the playlist to?</h3>
                                                                </div>
                                                                <div className={"flex flex-wrap"}>
                                                                    <SwapServiceButton service={"Spotify"} onClick={() => onServiceClick("Spotify")}/>
                                                                    <SwapServiceButton service={"Tidal"} onClick={() => onServiceClick("Tidal")}/>
                                                                    <SwapServiceButton service={"Apple Music"} onClick={() => onServiceClick("Apple Music")}/>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div className={"mt-8 text-center"}>
                                                                    <h3 className="text-2xl">Sign in to copy this playlist</h3>
                                                                </div>
                                                                <div className={"text-center mt-4"}>
                                                                    <Link to={"/signup"} className={"mr-1"}><Button>Sign Up</Button></Link>
                                                                    <Link to={"/login"} className={"ml-1"}><Button>Sign In</Button></Link>
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                </>
                                            ) : (
                                                <div className={"text-center"}>
                                                    <Headers.h2>Getting the share ready...</Headers.h2>
                                                    <Spinner />
                                                    <br />
                                                    <p>This may take a moment. Please wait...</p>
                                                </div>
                                            )
                                        }
                                    </>
                                )
                            }
                        </Dialog>
                    </div>
                </div>
                <TidalModal setVisible={setTidalModalVisible} visible={tidalModalVisible} />
            </MainWrapper>
        </UnprotectedRoute>
    );
};

export default ShareScreen;
