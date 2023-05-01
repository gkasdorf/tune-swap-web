import React, {useState} from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import Headers from "../../ui/typography/Headers";
import InputWrapper from "../../ui/input/InputWrapper";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import {Link} from "react-router-dom";

const SyncsScreen = () => {
    const [sendRequestEmail, setSendRequestEmail] = useState("");

    const onSendRequestSubmit = ((e) => {
        e.preventDefault();
    });

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 pb-20 lg:px-8"}>
                        <div className={"grid grid-cols-6 gap-4"}>
                            <div className={"col-span-6 xl:col-span-2"}>
                                <Dialog>
                                    <Headers.h2 bold>Syncs</Headers.h2>
                                    <p className={"text-justify"}>
                                        With syncs, you can keep two playlists in sync with each other. This means that
                                        any changes made to one playlist will be reflected in the other playlist.
                                    </p>
                                    <br />
                                    <p className={"text-justify"}>
                                        Have a friend? Send them a sync request and you can both keep your playlist
                                        in sync with each other. Collaborate no matter what music service you use.
                                    </p>
                                </Dialog>
                            </div>
                            <div className={"col-span-6 xl:col-span-4"}>
                                <Dialog max={"mx-auto"}>
                                    <Headers.h2 bold>
                                        Your Syncs
                                        <Link to={"/app/sync/new"}><Button className={"float-right text-sm font-medium"}>Create Sync</Button></Link>
                                    </Headers.h2>
                                    <hr />
                                </Dialog>

                            </div>
                            <div className={"col-span-6 xl:col-span-2"}>
                                <Dialog>
                                    <Headers.h2 bold>Send A Request</Headers.h2>
                                    <p>
                                        Send a request to a friend to keep your playlists in sync. Ask for their
                                        TuneSwap email and enter it below.
                                    </p>
                                    <form onSubmit={onSendRequestSubmit}>
                                        <InputWrapper>
                                            <Input
                                                type={"email"}
                                                placeholder={"Email"}
                                                value={sendRequestEmail}
                                                onChange={(e) => setSendRequestEmail(e.target.value)}
                                            />
                                        </InputWrapper>
                                        <div className={"overflow-hidden"}>
                                            <Button type={"submit"} className={"float-right"}>Send Request</Button>
                                        </div>
                                    </form>
                                </Dialog>
                            </div>
                            <div className={"col-span-6 xl:col-span-4"}>
                                <Dialog>
                                    <Headers.h2 bold>Sync Requests</Headers.h2>
                                    <hr />
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default SyncsScreen;