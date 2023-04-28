import React, {useEffect, useState} from "react";
import UnprotectedRoute from "../../wrappers/UnprotectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import Headers from "../../ui/typography/Headers";
import {useParams} from "react-router-dom";
import ShareApi from "../../../api/share/ShareApi";
import Alert from "../../ui/alert/Alert";
import Spinner from "../../ui/spinner/Spinner";
import {DescriptionList, DescriptionListItem} from "../../ui/descriptionList/DescriptionList";

const ShareScreen = () => {
    const [share, setShare] = useState(null);
    const [error, setError] = useState(null);
    const [isOwner, setIsOwner] = useState(false);

    const {shareId} = useParams();

    //const reload = null;

    useEffect(() => {
        loadShare();
    }, []);

    const loadShare = async () => {
        const res = await ShareApi.get(shareId);

        if(!res.success) {
            setError(res.data.message);
            return;
        }

        setShare(res.data.share);
        setIsOwner(res.data.isOwner);
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
                                        <Headers.h2 bold>{share.playlist.name}</Headers.h2>
                                        <DescriptionList>
                                            <DescriptionListItem>
                                                <span className={"font-bold"}>Playlist:</span>
                                                <span className={"float-right"}>{share.playlist.name}</span>
                                            </DescriptionListItem>
                                            {
                                                isOwner && (
                                                    <DescriptionListItem>
                                                        <span className={"font-bold"}>Access ID:</span>
                                                        <span className={"float-right"}>{share.access_id}</span>
                                                    </DescriptionListItem>
                                                )
                                            }
                                        </DescriptionList>
                                    </>
                                )
                            }
                        </Dialog>
                    </div>
                </div>
            </MainWrapper>
        </UnprotectedRoute>
    );
};

export default ShareScreen;