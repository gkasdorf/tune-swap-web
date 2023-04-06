import {Button, Card, Col, Row, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import UserApi from "../../../api/UserApi";
import MusicServiceIcon from "../../../models/MusicServiceIcon";
import "./Card.css";

const SwapsCard = ({user}) => {
    const [swapsLoading, setSwapsLoading] = useState(true);
    const [swaps, setSwaps] = useState([]);

    const getSwaps = async () => {
        const res = await UserApi.getSwaps(5);
        setSwapsLoading(false);
        setSwaps(res.data.data.swaps);
    }

    useEffect(() => {
        getSwaps();
    }, []);

    return (
        <Card>
            <Card.Header>
                <h3 className={"text-center"}>Your Swaps <Button className={"float-end"} size={"sm"}>View All</Button></h3>
            </Card.Header>
            <Card.Body>
                {swapsLoading &&
                    <p className={"text-center"}>Loading...</p>
                }
                {(!swaps || swaps.length < 1) && !swapsLoading &&
                    <p>You have not created any swaps. <Link to={"/app/swap"}>Create one now!</Link></p>
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
            </Card.Body>
        </Card>
    );
};

export default SwapsCard;