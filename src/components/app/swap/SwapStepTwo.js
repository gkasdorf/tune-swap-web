import Visibility from "../../Visibility";
import {Button, Card, ListGroup, ListGroupItem, Spinner} from "react-bootstrap";
import {useEffect, useState} from "react";
import UserApi from "../../../api/UserApi";
import "./Swap.css";
import {ChevronLeft} from "react-bootstrap-icons";

const SwapStepTwo = ({visible, fromService, setCurrentStep, setPlaylist}) => {
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPlaylists = async () => {
        setLoading(true);

        const res = await UserApi.getUserPlaylists(fromService);
        setPlaylists(res);

        setLoading(false);
    }

    useEffect(() => {
        if(!visible) return;

        getPlaylists();
    }, [visible])

    const playlistClick = (playlist) => {
        setPlaylist(playlist);
        setCurrentStep("three");
    }

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