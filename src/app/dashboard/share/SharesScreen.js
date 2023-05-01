import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import Headers from "../../ui/typography/Headers";
import Button from "../../ui/button/Button";
import {Link} from "react-router-dom";
import ShareApi from "../../../api/share/ShareApi";
import Spinner from "../../ui/spinner/Spinner";
import { DescriptionList, DescriptionListItem } from "../../ui/descriptionList/DescriptionList";

const SharesScreen = () => {
    const [shares, setShares] = useState(null);
    const [sharesLoading, setSharesLoading] = useState(true);

    useEffect(() => {
        loadShares();
    }, []);

    const loadShares = async () => {
        const res = await ShareApi.getAll();

        console.log(res.data);

        setShares(res.data.shares);
        setSharesLoading(false);
    };

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 pb-20 lg:px-8"}>
                        <div className={"grid grid-cols-6 gap-4"}>
                            <div className={"col-span-6 xl:col-span-2"}>
                                <Dialog>
                                    <Headers.h2 bold>Share</Headers.h2>
                                    <p>
                                        Sharing allows you to send your playlist to a friend on another platform. All you
                                        have to do is give them the link to the share and they will be able to add
                                        the playlist to their own library.
                                    </p>
                                    <div className={"overflow-hidden"}>
                                        <Link to={"/app/share/new"}><Button className={"float-right"}>Create a Share</Button></Link>
                                    </div>
                                </Dialog>
                            </div>
                            <div className={"col-span-6 xl:col-span-4"}>
                                <Dialog>
                                    <Headers.h2 bold>Your Shares</Headers.h2>
                                    {
                                        sharesLoading && (
                                            <Spinner />
                                        ) || shares && shares.length === 0 && (
                                            <p className="text-center">You don&apos;t have any shares.</p>
                                        ) || shares && shares.length > 0 && (
                                            <DescriptionList>
                                                {
                                                    shares.map((share, index) => (
                                                        <DescriptionListItem key={index}>
                                                            <Link to={`/share/${share.access_id}`}>{share.playlist.name}</Link>
                                                        </DescriptionListItem>
                                                    ))
                                                }
                                            </DescriptionList>
                                        )
                                    }
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default SharesScreen;
