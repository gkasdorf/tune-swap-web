import Visibility from "../../Visibility";
import {Button, Card, FormCheck, FormControl, ListGroup, ListGroupItem, Spinner} from "react-bootstrap";
import {List} from "react-bootstrap-icons";
import {useEffect, useState} from "react";
import FormCheckInput from "react-bootstrap/FormCheckInput";
import UserApi from "../../../api/UserApi";
import {useNavigate} from "react-router-dom";

const SwapStepFour = ({visible, swapParams}) => {
    const [playlistName, setPlaylistName] = useState("");
    const [isPrivate, setIsPrivate] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if(!visible) return;

        setPlaylistName(swapParams.playlist.name);
    }, [visible]);

    const submit = async () => {
        setIsLoading(true);

        const data = {
            fromService: swapParams.fromService,
            toService: swapParams.toService,
            playlistName: playlistName,
            playlistId: swapParams.playlist.id
        };

        const newSwap = await UserApi.createSwap(data);

        navigate("/app/swap/" + newSwap.data.data.swapId);
    }

    return (
        <Visibility visible={visible}>
            <Card>
                <Card.Header>
                    <h3 className={"text-center"}>Summary</h3>
                </Card.Header>
                <Card.Body>
                    <Visibility visible={!isLoading}>
                        <ListGroup>
                            <ListGroupItem>
                                Moving from <b>{swapParams.fromService}</b> to <b>{swapParams.toService}</b>
                            </ListGroupItem>
                            <ListGroupItem>
                                Name
                                <FormControl type={"input"} value={playlistName} onChange={(e) => setPlaylistName(e.target.value)} />
                            </ListGroupItem>
                            <ListGroupItem>
                                <FormCheck>
                                    <FormCheck.Input checked={isPrivate} onChange={() => setIsPrivate(!isPrivate)} />
                                    <FormCheck.Label>Private</FormCheck.Label>
                                </FormCheck>
                            </ListGroupItem>
                        </ListGroup>
                    </Visibility>
                    <Visibility visible={isLoading}>
                        <div className={"d-flex justify-content-center"}>
                            <Spinner animation={"border"} role={"status"} />
                        </div>
                        <br />
                        <div className={"text-center"}>
                            <span>Creating your swap...</span>
                        </div>
                    </Visibility>
                </Card.Body>
                <Card.Footer>
                    <Button className={"float-end"} disabled={isLoading} onClick={submit}>
                        {isLoading && <span>Loading...</span> }
                        {!isLoading && <span>Start Swap</span> }
                    </Button>
                </Card.Footer>
            </Card>
        </Visibility>
    )
};

export default SwapStepFour;