import React, {useState} from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import Headers from "../../ui/typography/Headers";
import ServicesApi from "../../../api/app/ServicesApi";
import SwapServiceButton from "../swap/SwapServiceButton";
import MusicServiceIcon from "../../../models/MusicServiceIcon";
import ShareApi from "../../../api/share/ShareApi";
import {useNavigate} from "react-router-dom";

const NewShareScreen = () => {
    const [playlists, setPlaylists] = useState(null);

    const [service, setService] = useState(null);

    const navigate = useNavigate();

    const loadPlaylists = async(service) => {
        setPlaylists([]);
        setService(service);

        const res = await ServicesApi.getUserPlaylists(service);

        if(!res.success) {
            return;
        }

        setPlaylists(res.data.playlists);
    };

    const onPlaylistClick = async (id) => {
        const res = await ShareApi.create(service, id);

        if(!res.success) {
            return;
        }

        navigate("/share/" + res.data.share.access_id);
    };

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-lg px-4 pt-16 sm:px-6 pb-20 lg:px-8"}>
                        <Dialog>
                            <Headers.h2 bold>Select a playlist to share</Headers.h2>
                            {
                                !playlists && (
                                    <div className={"flex flex-wrap"}>
                                        <SwapServiceButton service={"Spotify"} onClick={() => loadPlaylists("Spotify")}/>
                                        <SwapServiceButton service={"Tidal"} onClick={() => loadPlaylists("Tidal")}/>
                                        <SwapServiceButton service={"Apple Music"} onClick={() => loadPlaylists("Apple Music")}/>
                                    </div>
                                )
                            }
                            {
                                playlists && playlists.length === 0 && (
                                    <p className={"text-center"}>Loading...</p>
                                )
                            }
                            {
                                playlists && playlists.length > 0 && (
                                    <div className={"border-gray-200 border"}>
                                        <dl>
                                            {
                                                playlists.map((pl, index) => (
                                                    <div
                                                        key={index}
                                                        className={"bg-white px-4 py-2 border-b hover:bg-gray-50 hover:cursor-pointer"}
                                                        onClick={() => onPlaylistClick(pl.id, pl.name, pl.description)}
                                                    >
                                                        <dt className={"text-md font-medium text-gray-800"}>
                                                            <div className={"flex flex-row items-center"}>
                                                                <img src={pl.image ?? MusicServiceIcon(service)} alt={pl.name} className={"h-14 rounded-2 mr-2"} />
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
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default NewShareScreen;