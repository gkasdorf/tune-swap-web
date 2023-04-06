import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import UserApi from "../../../api/UserApi";
import ProtectedRoute from "../../../AuthProvider";
import NavBar from "../../navbar/NavBar";
import Footer from "../../footer/Footer";
import {
    Button,
    ButtonGroup,
    Card,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    ProgressBar,
    Row,
    Spinner
} from "react-bootstrap";
import Visibility from "../../Visibility";
import MusicServiceIcon from "../../../models/MusicServiceIcon";
import convertDate from "../../../helpers/convertDate";
import {ArrowRight} from "react-bootstrap-icons";
import ProtectedRouteContainer from "../ProtectedRouteContainer";

const Swap = () => {
    const [swap, setSwap] = useState(null);
    const {swapId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [swapProgress, setSwapProgress] = useState(100);

    let interval = null;

    const getSwap = async () => {
        const res = await UserApi.getSwap(swapId);

        setSwap(res.data.data.swap);

        if(res.data.data.swap.status === "Finding Music") {
            const found = res.data.data.swap.songs_found;
            const notFound = res.data.data.swap.songs_not_found;
            const total = res.data.data.swap.total_songs;

            const percentage = (parseInt(found) + parseInt(notFound)) * 100 / total;

            setSwapProgress(percentage);
        }

        if(res.data.data.swap.status !== "Completed" &&
            res.data.data.swap.status !== "Error" &&
            interval === null) {

            interval = setInterval(getSwap, 5000);
        } else if(interval !== null &&
            (res.data.data.swap.status === "Completed" || res.data.data.swap.status === "Error")) {
            clearInterval(interval);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        getSwap();
    }, [swapId]);

    return (
        <ProtectedRouteContainer>
            <Row>
                <Col md={{offset: 2, span: 8}} sm={12}>
                    {swap &&
                        <Visibility visible={!isLoading}>
                            <Card>
                                <Card.Header>
                                    <div className={"swapStatus"}>
                                        <div className={"swapStatusIcons text-center"}>
                                            <img src={MusicServiceIcon(swap.from_service)} className={"serviceIcon"} />
                                            <ArrowRight size={40} className={"serviceIcon"}/>
                                            <img src={MusicServiceIcon(swap.to_service)} className={"serviceIcon"} />
                                        </div>
                                        <div className={"text-center text-end"}>
                                            <h4>{swap.playlist_name}</h4>
                                        </div>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <b>Status:</b><span className={"float-end"}>{swap.status}</span>
                                            {swap.status === "Finding Music" &&
                                                <div className={"swapProgress"}>
                                                    <ProgressBar animated now={swapProgress} />
                                                </div>
                                            }
                                        </ListGroupItem>
                                        <ListGroupItem><b>Total Songs:</b><span className={"float-end"}>{swap.total_songs}</span></ListGroupItem>
                                        <ListGroupItem><b>Songs Found:</b><span className={"float-end"}>{swap.songs_found}</span></ListGroupItem>
                                        <ListGroupItem><b>Songs Not Found:</b><span className={"float-end"}>{swap.songs_not_found}</span></ListGroupItem>
                                        <ListGroupItem><b>Original Playlist:</b> <a href={"#"}>
                                            <Button size={"sm"} variant={"secondary"} className={"float-end"}>{swap.from_service}</Button>
                                        </a></ListGroupItem>
                                        <ListGroupItem><b>Created Playlist:</b> <a href={"#"}>
                                            <Button size={"sm"} variant={"secondary"} className={"float-end"}>{swap.to_service}</Button>
                                        </a></ListGroupItem>
                                        <ListGroupItem><b>Automatic Syncing:</b><span className={"float-end"}>Disabled</span></ListGroupItem>
                                    </ListGroup>
                                </Card.Body>
                                <Card.Footer>
                                    <div className={"float-end"}>
                                        <ButtonGroup>
                                            <Button>Sync</Button>
                                            <Button>Share</Button>
                                        </ButtonGroup>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Visibility>
                    }
                    <Visibility visible={isLoading}>
                        <div className={"d-flex justify-content-center"}>
                            <Spinner animation={"border"} role={"status"}/>
                        </div>
                        <br/>
                        <div className={"text-center"}>
                            <span>Loading...</span>
                        </div>
                    </Visibility>
                </Col>
            </Row>
        </ProtectedRouteContainer>
    )
}

export default Swap;