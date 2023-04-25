import React, {useEffect, useState} from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import Dialog from "../../ui/dialog/Dialog";
import DialogTitle from "../../ui/dialog/DialogTitle";
import Button from "../../ui/button/Button";
import SwapApi from "../../../api/swap/SwapApi";
import {Link} from "react-router-dom";

const DashScreen = () => {
    const [swaps, setSwaps] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [syncs, setSyncs] = useState([]);

    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        getData();
    }, []);

    const getData = async() => {
        const swapsRes = await SwapApi.getAll(5, 0);

        setSwaps(swapsRes.data.swaps ?? []);
        setSyncs([]);
        setDataLoading(false);
    };

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-200"}>
                    <div className={"mx-auto max-w-screen-xl px-4 pt-16 sm:px-6 lg:px-8"}>
                        <Dialog max={"max-w-4xl"}>
                            <DialogTitle>
                                Welcome!
                            </DialogTitle>
                            <p className={"text-center"}>To get started, click Start Swap below!</p>
                            <div className={"flex justify-center mt-4"}>
                                <Link to={"/app/swap"}><Button>Start Swap</Button></Link>
                            </div>
                        </Dialog>
                    </div>
                    <div className={"mx-auto max-w-screen-xl px-4 py-2 pb-10 sm:px-6 lg:px-8"}>
                        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8"}>
                            <div className={"col-span-1"}>
                                <Dialog max={"mx-auto"}>
                                    <DialogTitle
                                        button={<Link to={"/app/swap/all"}><Button>View All</Button></Link>}
                                    >
                                        Swap History
                                    </DialogTitle>
                                    {dataLoading ? (
                                        <p className={"text-center"}>Loading...</p>
                                    ) : (
                                        <div className={"flex flex-col"}>
                                            {swaps.length === 0 ? (
                                                <p className={"text-center"}>No swaps found.</p>
                                            ) : (
                                                <div className={"flex flex-col"}>
                                                    <table className={"min-w-full divide-y divide-gray-200"}>
                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Status</th>
                                                                <th>View</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                                            {swaps.map((swap, index) => (
                                                                <tr key={index}>
                                                                    <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                                                        {swap.playlist_name}
                                                                    </td>
                                                                    <td className="px-2 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                                                        {swap.status}
                                                                    </td>
                                                                    <td className="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                                                        <Link to={`/app/swap/${swap.id}`}><Button className={"float-right"}>View</Button></Link>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </Dialog>
                            </div>
                            <div className={"col-span-1"}>
                                <Dialog max={"mx-auto"}>
                                    <DialogTitle>Your Syncs</DialogTitle>
                                    <p className={"text-center"}>No syncs found.</p>
                                </Dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default DashScreen;