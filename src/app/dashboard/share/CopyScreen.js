/* eslint-disable */
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ShareApi from "../../../api/share/ShareApi";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import Alert from "../../ui/alert/Alert";
import Spinner from "../../ui/spinner/Spinner";
import Headers from "../../ui/typography/Headers";
import {DescriptionList, DescriptionListItem} from "../../ui/descriptionList/DescriptionList";
import {ChevronRight} from "react-bootstrap-icons";

const CopyScreen = () => {
    const [copy, setCopy] = useState(null);
    const [error, setError] = useState(null);

    const { copyId } = useParams();

    let reload = null;

    useEffect(() => {
        loadCopy();
    }, []);

    const loadCopy = async () => {
        const res = await ShareApi.getCopy(copyId);

        if(!res.success) {
            setError(res.data.message);
            return;
        }

        console.log(res);

        setCopy(res.data.copy);

        if(res.data.copy.status !== "Completed" && res.data.copy.status !== "Error" && !reload) {
            reload = setInterval(loadCopy, 5000);
        }

        if((res.data.copy.status === "Completed" || res.data.copy.status === "Error") && reload) {
            clearInterval(reload);
        }

        return () => {
            if(reload) clearInterval(reload);
        };
    };

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-lg px-4 pt-16 sm:px-6 pb-20 lg:px-8"}>
                        <Dialog>
                            {
                                !error && !copy && (
                                    <Spinner />
                                ) || error && (
                                    <Alert variant={"warning"} visible={error}>{error}</Alert>
                                ) || copy && (
                                    <>
                                        <Headers.h2 centered>{copy.share.playlist.name}</Headers.h2>
                                        <hr />
                                        <br />
                                        <DescriptionList>
                                            <DescriptionListItem>
                                                <span className={"font-bold"}>Status</span>
                                                <span className={"float-right"}>{copy.status}</span>
                                            </DescriptionListItem>
                                            {
                                                copy.status === "Completed" && (
                                                    <a href={copy.service_url}>
                                                        <DescriptionListItem>
                                                            <span className={"font-bold"}>Open in {copy.service}</span>
                                                            <span className={"float-right"}><ChevronRight className={"inline"}/></span>
                                                        </DescriptionListItem>
                                                    </a>
                                                )
                                            }
                                        </DescriptionList>
                                    </>
                                )
                            }
                        </Dialog>
                    </div>
                </div>
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default CopyScreen;