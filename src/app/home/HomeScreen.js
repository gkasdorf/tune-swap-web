/* eslint-disable react/no-unescaped-entities */
import React from "react";
import MainWrapper from "../wrappers/MainWrapper";
import Button from "../ui/button/Button";

const HomeScreen = () => {
    return (
        <MainWrapper>
            <div className={"bg-white"}>
                <div className={"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"}>
                    <div className={"grid grid-cols-2 gap-8"}>
                        <div className={"col-span-2 md:col-span-1"}>
                            <div className={"flex items-center"}>
                                <div className={"flex flex-col"}>
                                    <figure className={"mx-auto max-w-full w-600 h-auto w-1/2"}>
                                        <div
                                            className="p-1.5 bg-gray-800 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-600 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]"
                                        >
                                            <img className={"max-w-full h-auto rounded-[1.25rem]"} src={"./screen.png"} alt={"Home Screen"}/>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className={"col-span-2 md:col-span-1"}>
                            <h1 className={"text-4xl font-bold text-gray-900"}>Swaps. Made. <span className={"text-indigo-600"}>Easy.</span></h1>
                            <p className={"mt-4 text-xl text-gray-600"}>
                                Move your music from one streaming service to another with ease, all for free. And even
                                better, keep your music in sync without having to swap again.
                            </p>
                            <div className={"mt-8"}>
                                <Button className={"float-right ml-1"}>Sign Up</Button>
                                <Button className={"float-right mr-1"} variant={"secondary"}>Login</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-gray-50"}>
                <div className={"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"}>
                    <div className={"grid grid-cols-2 gap-8"}>
                        <div className={"col-span-2 md:col-span-1"}>
                            <h2 className={"text-3xl font-bold text-gray-900 text-center"}>
                                Easily convert your playlists from one service to another
                            </h2>
                            <p className={"mt-4 text-xl text-gray-600 text-justify"}>
                                Trying to switch from Spotify to Apple Music? Or maybe you're just looking to try out a new
                                service. Either way, TuneSwap makes it easy to move your playlists from one service to
                                another. Simply sign in to your first service, select the playlists you want to move, and
                                then sign in to your second service. We'll take care of the rest.
                            </p>
                        </div>
                        <div className={"col-span-2 md:col-span-1"}>
                            <div className={"col-span-2 md:col-span-1"}>
                                <h2 className={"text-3xl font-bold text-gray-900 text-center"}>
                                    Keep your playlists in sync
                                </h2>
                                <p className={"mt-4 text-xl text-gray-600 text-justify"}>
                                    Once you've moved your playlists, you can keep them in sync with TuneSwap. Simply
                                    select the playlists you want to sync, and we'll take care of the rest. We'll monitor
                                    your playlists for changes, and automatically update them on the other service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-white"}>
                <div className={"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"}>
                    <h2 className={"text-3xl font-bold text-gray-900 text-center"}>
                        Do it with friends too!
                    </h2>
                    <p className={"mt-4 text-xl text-gray-600 text-center"}>
                        TuneSwap is a great way to share your playlists with friends. Simply sign in to your service,
                        select the playlists you want to share, and then send your friend a link. They can then sign in
                        to their service and move your playlists to their account.
                    </p>
                    <p className={"mt-4 text-xl text-gray-600 text-center"}>
                        You can also use TuneSwap to keep your playlists in sync with friends. Once you add a playlist
                        to your account, you can share it with friends. They will be able to add it to their own service
                        and changes will be automatically synced.
                    </p>
                </div>
            </div>
        </MainWrapper>
    );
};

export default HomeScreen;