import ProtectedRouteContainer from "../ProtectedRouteContainer";
import {Row, Col, Card, Button, Tab, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ChevronLeft} from "react-bootstrap-icons";
import {useEffect, useState} from "react";
import MusicServiceIcon from "../../../models/MusicServiceIcon";
import UserApi from "../../../api/UserApi";
import InfiniteScroll from "react-infinite-scroll-component";

const Swaps = () => {
    const [swapsLoading, setSwapsLoading] = useState(true);
    const [swaps, setSwaps] = useState([]);
    const [currentOffset, setCurrentOffset] = useState(0);

    const getSwaps = async () => {
        console.log("Getting swaps", currentOffset);
        const res = await UserApi.getSwaps(15, currentOffset);
        setCurrentOffset((prev) => prev + 15);
        setSwapsLoading(false);
        setSwaps(swaps.concat(res.data.data.swaps));
    }

    useEffect(() => {
        getSwaps();
    }, [])

    return (
        <ProtectedRouteContainer>
            <div className={"mt-md-5"}>
                <Row>
                    <Col md={{offset: 2, span: 8}} sm={12}>
                        <Card>
                            <Card.Header className={"text-center"}>
                                <Link to={"/app/dash"}><Button variant={"primary"} className={"float-start"} size={"sm"}><ChevronLeft /> Go Back</Button></Link>
                                <h3>Your Swaps</h3>
                            </Card.Header>
                            <Card.Body>
                                <InfiniteScroll
                                    next={getSwaps}
                                    hasMore={(swaps.length % 15 === 0)}
                                    loader={<p className={"text-center"}>Loading...</p>}
                                    dataLength={swaps ? swaps.length : 0}
                                    endMessage={
                                        <p className={"text-center"}>That's it!</p>
                                    }
                                >
                                    {swapsLoading &&
                                        <p className={"text-center"}>Loading...</p>
                                    }
                                    {(!swaps || swaps.length < 1) && !swapsLoading &&
                                        <p className={"text-center"}>You have not created any swaps. <Link to={"/app/swap"}>Create one now!</Link></p>
                                    }
                                    {swaps && swaps.length > 0 &&
                                        <>
                                            <Table>
                                                <tbody>
                                                {swaps.map((swap) => {
                                                    return (
                                                        <tr key={swap.id}>
                                                            <th className={"iconTh"}><img src={MusicServiceIcon(swap.to_service)} className={"icon"} /></th>
                                                            <th><p>{swap.playlist_name}</p></th>
                                                            <th><p>{swap.status}</p></th>
                                                            <th className={"float-end"}><Link to={"/app/swap/" + swap.id}>
                                                                <Button variant={"primary"} size={"sm"}>View</Button>
                                                            </Link></th>
                                                        </tr>
                                                    );
                                                })}
                                                </tbody>
                                            </Table>
                                        </>
                                    }
                                </InfiniteScroll>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </ProtectedRouteContainer>
    )
}

export default Swaps;