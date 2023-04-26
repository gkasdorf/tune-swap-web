import React, {useEffect, useState} from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import DialogTitle from "../../ui/dialog/DialogTitle";
import {Link, useParams} from "react-router-dom";
import SwapApi from "../../../api/swap/SwapApi";
import MusicServiceIcon from "../../../models/MusicServiceIcon";
import {ArrowRight, ChevronRight} from "react-bootstrap-icons";
import Modal from "../../ui/modal/Modal";
import {DescriptionList, DescriptionListItem} from "../../ui/descriptionList/DescriptionList";

const SwapStatusScreen = () => {
    const {swapId} = useParams();

    const [swap, setSwap] = useState(null);
    const [swapPercentage, setSwapPercentage] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [songsNotFound, setSongsNotFound] = useState(null);
    const [showNotFound, setShowNotFound] = useState(false);

    let interval = null;

    useEffect(() => {
        getSwap();

        return () => {
            if(interval) clearInterval(interval);
        };
    }, [swapId]);

    const getSwap = async () => {
        const swapRes = await SwapApi.get(swapId);
        const swap = swapRes.data.swap;

        const percentage = Math.round(((swap.songs_found + swap.songs_not_found) / swap.total_songs) * 100);

        setSwap(swap);
        setSwapPercentage(percentage);

        if(swap.status !== "Completed" && swap.status !== "Error" && !interval) {
            interval = setInterval(getSwap, 5000);
        } else if(interval && (swap.status === "Completed" || swap.status === "Error")) {
            clearInterval(interval);
        }
    };

    const onNotFoundClick = async () => {
        if(swap.songs_not_found === 0) return;

        setShowNotFound(true);

        const notFoundRes = await SwapApi.getNotFound(swapId);
        setSongsNotFound(notFoundRes.data.swap.songs_not_found);
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
                                                <img src={MusicServiceIcon(swap.from_service)} className={"w-auto h-10 inline-block mr-2"} alt={"From"}/>
                                                <ArrowRight className={"inline-block"}/>
                                                &nbsp;
                                                {swap.playlist_name}
                                                &nbsp;
                                                <ArrowRight className={"inline-block"}/>
                                                <img src={MusicServiceIcon(swap.to_service)} className={"w-auto h-10 inline-block ml-2"} alt={"To"}/>
                                            </div>
                                        </DialogTitle>
                                        <div className={"flex flex-col"}>
                                            <div className={"border-gray-200 border"}>
                                                <dl className={"text-lg"}>
                                                    <dt className={"bg-white px-4 py-2 border-b hover:bg-gray-50"}>
                                                        <div className={"flex flex-wrap"}>
                                                            <div className={"w-full"}>
                                                                <span className={"font-bold"}>Status</span>
                                                                <span className={"float-right"}>{swap.status}</span>
                                                            </div>
                                                            {
                                                                swap.status !== "Error" && swap.status !== "Completed" && (
                                                                    <div
                                                                        className="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                                                        <div
                                                                            className="flex flex-col justify-center overflow-hidden bg-blue-500 text-xs text-white text-center"
                                                                            role="progressbar" style={{width: `${swapPercentage}%`}}
                                                                            aria-valuenow="57" aria-valuemin="0"
                                                                            aria-valuemax="100">{swapPercentage}%
                                                                        </div>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    </dt>
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
                                                        <span className={"float-right"}>{swap.songs_not_found} { swap.songs_not_found > 0 && <ChevronRight className={"inline"}/> }</span>
                                                    </dt>
                                                    {
                                                        swap.status === "Completed" && (
                                                            <>
                                                                <Link to={swap.from_playlist_url}>
                                                                    <dt className={"bg-white px-4 py-2 border-b hover:bg-gray-50"}>
                                                                        <span className={"font-bold"}>View Original Playlist on {swap.from_service}</span>
                                                                        <span className={"float-right"}><ChevronRight className={"inline"} /></span>
                                                                    </dt>
                                                                </Link>
                                                                <Link to={swap.to_playlist_url}>
                                                                    <dt className={"bg-white px-4 py-2 border-b hover:bg-gray-50"}>
                                                                        <span className={"font-bold"}>View New Playlist on {swap.to_service}</span>
                                                                        <span className={"float-right"}><ChevronRight className={"inline"} /></span>
                                                                    </dt>
                                                                </Link>
                                                            </>
                                                        )
                                                    }
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
                    <DescriptionList>
                        {
                            !songsNotFound ? (
                                <p className={"text-center"}>Loading...</p>
                            ) : (
                                songsNotFound && songsNotFound.map((notFound, index) => (
                                    <DescriptionListItem key={index}>
                                        <div className={"flex flex-col"}>
                                            <span>{notFound.song.name}</span>
                                            <span className={"block md:inline text-sm"}>{notFound.song.artist}</span>
                                        </div>
                                    </DescriptionListItem>
                                ))
                            )
                        }
                    </DescriptionList>
                </Modal>
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default SwapStatusScreen;