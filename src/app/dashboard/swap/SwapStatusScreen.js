import React, {useEffect, useState} from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import DialogTitle from "../../ui/dialog/DialogTitle";
import {useParams} from "react-router-dom";
import SwapApi from "../../../api/swap/SwapApi";
import MusicServiceIcon from "../../../models/MusicServiceIcon";
import {ArrowRight} from "react-bootstrap-icons";
import Modal from "../../ui/modal/Modal";

const SwapStatusScreen = () => {
    const {swapId} = useParams();

    const [swap, setSwap] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [songsNotFound, setSongsNotFound] = useState(null);
    const [showNotFound, setShowNotFound] = useState(false);

    useEffect(() => {
        getSwap();

    }, [swapId]);

    const getSwap = async () => {
        const swapRes = await SwapApi.get(swapId);
        setSwap(swapRes.data.swap);
        console.log(swap);
        console.log(swapRes.data.swap);
    };

    const onNotFoundClick = () => {
        setShowNotFound(true);
    };

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 pb-20 lg:px-8"}>
                        <Dialog max={"max-w-4xl"}>
                            {
                                !swap ? (
                                    <p className={"text-center"}>Loading...</p>
                                ) : (
                                    <>
                                        <DialogTitle>
                                            <div className={"flex items-center justify-center"}>
                                                <img src={MusicServiceIcon(swap.from_service)} className={"w-10 h-10 inline-block mr-2"} alt={"From"}/>
                                                <ArrowRight className={"inline-block"}/>
                                                &nbsp;
                                                {swap.playlist_name}
                                                &nbsp;
                                                <ArrowRight className={"inline-block"}/>
                                                <img src={MusicServiceIcon(swap.to_service)} className={"w-10 h-10 inline-block ml-2"} alt={"To"}/>
                                            </div>
                                        </DialogTitle>
                                        <div className={"flex flex-col"}>
                                            <div className={"border-gray-200 border"}>
                                                <dl className={"text-lg"}>
                                                    <dt className={"bg-white px-4 py-2 border-b hover:bg-gray-50"}>
                                                        <span className={"font-bold"}>From</span>
                                                        <span className={"float-right"}>{swap.from_service}</span>
                                                    </dt>
                                                    <dt className={"bg-white px-4 py-2 border-b hover:bg-gray-50"}>
                                                        <span className={"font-bold"}>To</span>
                                                        <span className={"float-right"}>{swap.to_service}</span>
                                                    </dt>
                                                    <dt className={"bg-white px-4 py-2 border-b hover:bg-gray-50"}>
                                                        <span className={"font-bold"}>Total Songs</span>
                                                        <span className={"float-right"}>{swap.total_songs}</span>
                                                    </dt>
                                                    <dt className={"bg-white px-4 py-2 border-b hover:bg-gray-50"}>
                                                        <span className={"font-bold"}>Songs Found</span>
                                                        <span className={"float-right"}>{swap.songs_found}</span>
                                                    </dt>
                                                    <dt className={"bg-white px-4 py-2 border-b hover:bg-gray-50 hover:cursor-pointer"} onClick={onNotFoundClick}>
                                                        <span className={"font-bold"}>Songs Not Found</span>
                                                        <span className={"float-right"}>{swap.songs_not_found}</span>
                                                    </dt>
                                                </dl>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        </Dialog>
                    </div>
                </div>
                <Modal setModalVisible={setShowNotFound} title={"Songs Not Found"} visible={showNotFound}>
                    <p>Some Text</p>
                </Modal>
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default SwapStatusScreen;