/* eslint-disable */
import React, {useState} from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import Headers from "../../ui/typography/Headers";
import ServicesApi from "../../../api/app/ServicesApi";
import SwapServiceButton from "../swap/SwapServiceButton";
import MusicServiceIcon from "../../../models/MusicServiceIcon";

const SyncStepOne = () => {
    const [playlists, setPlaylists] = useState({
        one: null,
        two: null,
    });

    const [playlist, setPlaylist] = useState({
        one: {
            service: null,
            id: null
        },
        two: {
            service: null,
            id: null
        }
    });

    const loadPlaylists = async (service, which) => {
        setPlaylists({
            ...playlists,
            [which]: []
        });

        const res = await ServicesApi.getUserPlaylists(service);

        setPlaylists({
            ...playlists,
            [which]: res.data.playlists
        });

        setPlaylist({
            ...playlist,
            [which]: {
                service,
                id: null
            }
        });
    };

    const onPlaylistClick = async (id, name, which) => {

    }

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 pb-20 lg:px-8"}>
                        <div className={"grid grid-cols-2 gap-3"}>
                            <div className={"col-span-2 lg:col-span-1"}>
                                <Dialog>
                                    <Headers.h2 bold>Select Playlist One</Headers.h2>
                                    <hr />
                                    {
                                        !playlists.one && (
                                            <div className={"flex flex-wrap"}>
                                                <SwapServiceButton service={"Spotify"} onClick={() => loadPlaylists("Spotify", "one")}/>
                                                <SwapServiceButton service={"Tidal"} onClick={() => loadPlaylists("Tidal", "one")}/>
                                                <SwapServiceButton service={"Apple Music"} onClick={() => loadPlaylists("Apple Music", "one")}/>
                                            </div>
                                        )
                                    }
                                    {
                                        playlists.one && playlists.one.length === 0 && (
                                            <p className={"text-center"}>Loading...</p>
                                        )
                                    }
                                    {
                                        playlists.one && playlists.one.length > 0 && (
                                            <div className={"border-gray-200 border"}>
                                                <dl>
                                                    {
                                                        playlists.one.map((pl, index) => (
                                                            <div
                                                                key={index}
                                                                className={"bg-white px-4 py-2 border-b hover:bg-gray-50 hover:cursor-pointer"}
                                                                onClick={() => onPlaylistClick(pl.id, pl.name, pl.description)}
                                                            >
                                                                <dt className={"text-md font-medium text-gray-800"}>
                                                                    <div className={"flex flex-row items-center"}>
                                                                        <img src={pl.image ?? MusicServiceIcon(playlist.one.service)} alt={pl.name} className={"h-14 rounded-2 mr-2"} />
                                                                        <p>
                                                                            {pl.name}
                                                                        </p>
                                                                    </div>
                                                                </dt>
                                                            </div>
                                                        ))
                                                    }
                                                </dl>
                                            </div>
                                        )
                                    }
                                </Dialog>
                            </div>
                            <div className={"col-span-2 lg:col-span-1"}>
                                <Dialog>
                                    <Headers.h2 bold>Select Playlist Two</Headers.h2>
                                    <hr />
                                    {
                                        !playlists.two && (
                                            <div className={"flex flex-wrap"}>
                                                <SwapServiceButton service={"Spotify"} onClick={() => loadPlaylists("Spotify", "two")}/>
                                                <SwapServiceButton service={"Tidal"} onClick={() => loadPlaylists("Tidal", "two")}/>
                                                <SwapServiceButton service={"Apple Music"} onClick={() => loadPlaylists("Apple Music", "two")}/>
                                            </div>
                                        )
                                    }
                                    {
                                        playlists.two && playlists.two.length === 0 && (
                                            <p className={"text-center"}>Loading...</p>
                                        )
                                    }
                                    {
                                        playlists.two && playlists.two.length > 0 && (
                                            <div className={"border-gray-200 border"}>
                                                <dl>
                                                    {
                                                        playlists.two.map((pl, index) => (
                                                            <div
                                                                key={index}
                                                                className={"bg-white px-4 py-2 border-b hover:bg-gray-50 hover:cursor-pointer"}
                                                                onClick={() => onPlaylistClick(pl.id, pl.name, pl.description)}
                                                            >
                                                                <dt className={"text-md font-medium text-gray-800"}>
                                                                    <div className={"flex flex-row items-center"}>
                                                                        <img src={pl.image ?? MusicServiceIcon(playlist.two.service)} alt={pl.name} className={"h-14 rounded-2 mr-2"} />
                                                                        <p>
                                                                            {pl.name}
                                                                        </p>
                                                                    </div>
                                                                </dt>
                                                            </div>
                                                        ))
                                                    }
                                                </dl>
                                            </div>
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

export default SyncStepOne;