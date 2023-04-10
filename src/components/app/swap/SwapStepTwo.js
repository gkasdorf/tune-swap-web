import Visibility from "../../Visibility";
import {Button, Card, ListGroup, ListGroupItem, Spinner} from "react-bootstrap";
import {useEffect, useState} from "react";
import UserApi from "../../../api/UserApi";
import "./Swap.css";
import {ChevronLeft} from "react-bootstrap-icons";
import MusicService from "../../../models/MusicService";

const SwapStepTwo = ({visible, fromService, setCurrentStep, setPlaylist}) => {
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);

    /**
     * Get the playlists to render
     * @returns {Promise<void>}
     */
    const getPlaylists = async () => {
        // Show loading
        setLoading(true);

        // Get the user playlists
        const resPlaylists = await UserApi.getUserPlaylists(fromService);

        // Add the library option
        resPlaylists.unshift({
            id: "library",
            name: "Your Library",
            image: (() => {
                switch(fromService) {
                    case MusicService.Spotify: {
                        return "/SpotifyIcon.svg";
                    }
                    case MusicService.AppleMusic: {
                        return "/AppleMusicIcon.svg";
                    }
                    case MusicService.Tidal: {
                        return "/TidalIcon.png";
                    }
                }
            })()
        });

        setPlaylists(resPlaylists);

        setLoading(false);
    }

    useEffect(() => {
        // If the component is rendered, get the playlists.
        if(!visible) return;

        getPlaylists();
    }, [visible])

    // Process the selection
    const playlistClick = (playlist) => {
        setPlaylist(playlist);
        setCurrentStep("three");
    }

    // Send the user back to the last screen
    const backClick = () => {
        setCurrentStep("one");
    }

    return (
        <Visibility visible={visible}>
            <Card>
                <Card.Header>
                    <Button className={"float-start"} size={"sm"} variant={"dark"} onClick={backClick}><ChevronLeft />Back</Button>
                    <h3 className={"text-center"}>Select a playlist</h3>
                </Card.Header>
                <Card.Body>
                    <Visibility visible={loading}>
                        <div className={"d-flex justify-content-center"}>
                            <Spinner animation={"border"} role={"status"} />
                        </div>
                    </Visibility>
                    <Visibility visible={!loading}>
                        <ListGroup>
                            {playlists.map((playlist) => {
                                return (
                                    <ListGroupItem key={playlist.id} className={"playlistItem"} onClick={() => playlistClick(playlist)}>
                                        <img src={playlist.image} className={"playlistImage"} />
                                        <span className={"playlistName"}>
                                            {playlist.name}
                                        </span>
                                    </ListGroupItem>
                                );
                            })}
                        </ListGroup>
                    </Visibility>
                </Card.Body>
            </Card>
        </Visibility>
    );
};

export default SwapStepTwo;