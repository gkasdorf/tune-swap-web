import React from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import Headers from "../../ui/typography/Headers";
import Button from "../../ui/button/Button";
import {Link} from "react-router-dom";

const SharesScreen = () => {
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