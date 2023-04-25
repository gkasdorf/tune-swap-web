import React, {useEffect, useState} from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import DialogTitle from "../../ui/dialog/DialogTitle";
import SwapApi from "../../../api/swap/SwapApi";
import {Link} from "react-router-dom";
import Button from "../../ui/button/Button";
import {DescriptionList, DescriptionListItem} from "../../ui/descriptionList/DescriptionList";

const SwapListScreen = () => {
    const [swaps, setSwaps] = useState(null);
    const [totalSwaps, setTotalSwaps] = useState(0);
    const [currentOffset, setCurrentOffset] = useState(0);

    useEffect(() => {
        loadSwaps(currentOffset);
    }, [currentOffset]);

    const loadSwaps = async (offset) => {
        const swapsRes = await SwapApi.getAll(10, offset);

        console.log(swapsRes.data.total);

        setSwaps(swapsRes.data.swaps);
        setTotalSwaps(swapsRes.data.total);
    };

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8"}>
                        <Dialog max={"max-w-4xl"}>
                            <DialogTitle>
                                Your Swaps
                            </DialogTitle>
                            {
                                !swaps ? (
                                    <p className={"text-center"}>Loading...</p>
                                ) : (
                                    <DescriptionList>
                                        {
                                            swaps.length === 0 ? (
                                                <p className={"text-center"}>No swaps found.</p>
                                            ) : (
                                                swaps.map((swap) => (
                                                    <Link to={`/app/swap/${swap.id}`} key={swap.id}>
                                                        <DescriptionListItem className={"hover:cursor-pointer"}>
                                                            <span className={"text-md"}>{swap.playlist_name}</span>
                                                            <span className={"text-md float-right"}>{swap.status}</span>
                                                        </DescriptionListItem>
                                                    </Link>
                                                ))
                                            )
                                        }

                                    </DescriptionList>
                                )
                            }

                            <div className={"flex justify-center mt-6"}>
                                {
                                    currentOffset > 0 && (
                                        <Button onClick={() => setCurrentOffset((prev) => prev - 10)} className={"mx-1"}>Previous</Button>
                                    )
                                }
                                {
                                    totalSwaps > 10 && currentOffset <= totalSwaps - 10 && (
                                        <Button onClick={() => setCurrentOffset((prev) => prev + 10)} className={"mx-1"}>Next</Button>
                                    )
                                }
                            </div>
                        </Dialog>
                    </div>
                </div>
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default SwapListScreen;