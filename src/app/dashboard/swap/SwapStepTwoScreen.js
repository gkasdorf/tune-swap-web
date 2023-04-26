import React, {useEffect, useState} from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Dialog from "../../ui/dialog/Dialog";
import DialogTitle from "../../ui/dialog/DialogTitle";
import ServicesApi from "../../../api/app/ServicesApi";
import {setSwapPlaylist} from "../../../slices/swapSlice";
import MusicServiceIcon from "../../../models/MusicServiceIcon";

const SwapStepTwoScreen = () => {
    // eslint-disable-next-line no-unused-vars
    const [playlists, setPlaylists] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [dataLoading, setDataLoading] = useState(true);

    const { from } = useSelector(state => state.swap);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(!from) {
            navigate("/app/swap");
        }

        loadPlaylists();
    }, []);

    const loadPlaylists = async () => {
        const plRes = await ServicesApi.getUserPlaylists(from);
        const pls = plRes.data.playlists;

        pls.unshift({
            id: "library",
            name: `My ${from} Library`,
            image: null,
            description: ""
        });

        setPlaylists(pls);
        setDataLoading(false);
    };

    const onPlaylistClick = async (id, name, description) => {
        dispatch(setSwapPlaylist({
            id,
            name,
            description
        }));

        navigate("/app/swap/step-three");
    };

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 pb-20 lg:px-8"}>
                        <Dialog max={"max-w-4xl"}>
                            <DialogTitle>
                                Select a playlist to swap
                            </DialogTitle>
                            <div className={"flex flex-wrap"}>
                                <div className={"w-full rounded-sm"}>
                                    <div className={"bg-white overflow-hidden sm:rounded-lg"}>
                                        {
                                            dataLoading && (
                                                <div className={"px-4 py-5 sm:px-6"}>
                                                    <h3 className={"text-lg leading-6 font-medium text-gray-900 text-center"}>
                                                        Loading playlists...
                                                    </h3>
                                                </div>
                                            )
                                        }
                                        {
                                            !dataLoading && playlists.length === 0 && (
                                                <div className={"px-4 py-5 sm:px-6"}>
                                                    <h3 className={"text-lg leading-6 font-medium text-gray-900"}>
                                                        No playlists found.
                                                    </h3>
                                                </div>
                                            )
                                        }
                                        {
                                            !dataLoading && playlists.length > 0 && (
                                                <div className={"border-gray-200 border"}>
                                                    <dl>
                                                        {
                                                            playlists.map((playlist, index) => (
                                                                <div
                                                                    key={index}
                                                                    className={"bg-white px-4 py-2 border-b hover:bg-gray-50 hover:cursor-pointer"}
                                                                    onClick={() => onPlaylistClick(playlist.id, playlist.name, playlist.description)}
                                                                >
                                                                    <dt className={"text-md font-medium text-gray-800"}>
                                                                        <div className={"flex flex-row items-center"}>
                                                                            <img src={playlist.image ?? MusicServiceIcon(from)} alt={playlist.name} className={"h-14 rounded-2 mr-2"} />
                                                                            <p>
                                                                                {playlist.name}
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
                                    </div>
                                </div>
                            </div>
                        </Dialog>
                    </div>
                </div>
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default SwapStepTwoScreen;