import React from "react";
import {Link} from "react-router-dom";

const FooterComponent = () => {
    return (
        <>
            <footer className={"bg-white border-t-2 border-gray-300"}>
                <div className={"mx-auto max-w-screen-xl px-4 py-8 md:py-14 sm:px-6 lg:px-8"}>
                    <div>
                        <div className={"grid grid-cols-2 lg:grid-cols-4 gap-y-10"}>
                            <div className={"col-span-2 sm:col-span-1"}>
                                <h3 className={"text-xl font-medium text-gray-900 pb-2"}>
                                    TuneSwap
                                </h3>
                                <ul>
                                    <li>
                                        <Link to={"https://apps.apple.com/us/app/tuneswap/id6447500724"}>
                                            <img src={"/DownloadOnAppStore.svg"}  alt={"Download on App Store"}/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={"col-span-2 sm:col-span-1"}>
                                <h3 className={"text-xl font-medium text-gray-900 pb-2"}>
                                    About
                                </h3>
                                <ul>
                                    <li>
                                        <Link to={"/home"} className={"text-indigo-600 hover:text-indigo-950"}>Home</Link>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <Link to={"/features"} className={"text-indigo-600 hover:text-indigo-950"}>Features</Link>*/}
                                    {/*</li>*/}
                                    <li>
                                        <Link to={"https://status.tuneswap.app"} className={"text-indigo-600 hover:text-indigo-950"}>Service Status</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={"col-span-2 sm:col-span-1"}>
                                <h3 className={"text-xl font-medium text-gray-900 pb-2"}>
                                    Legal Stuff
                                </h3>
                                <ul>
                                    <li>
                                        <Link to={"/terms"} className={"text-indigo-600 hover:text-indigo-950"}>Terms of Service</Link>
                                    </li>
                                    <li>
                                        <Link to={"/privacy"} className={"text-indigo-600 hover:text-indigo-950"}>Privacy Policy</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className={"col-span-2 sm:col-span-1"}>
                                <h3 className={"text-xl font-medium text-gray-900 pb-2"}>
                                    Contact
                                </h3>
                                <ul>
                                    <li>
                                        <Link to={"https://github.com/gkasdorf/tuneswap-web/issues"} className={"text-indigo-600 hover:text-indigo-950"}>Report a Bug</Link>
                                    </li>
                                    <li>
                                        <Link to={"https://github.com/gkasdorf/tuneswap-web/issues"} className={"text-indigo-600 hover:text-indigo-950"}>Feedback</Link>
                                    </li>
                                    <li>
                                        <Link to={"https://trello.com/b/dOEkVxW7/tuneswap"} className={"text-indigo-600 hover:text-indigo-950"}>Roadmap</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={"mt-8 md:mt-16 flex items-center justify-center"}>
                        <p>Copyright &copy; 2023 Gavin Kasdorf - <Link to={"/license"} className={"text-indigo-600 hover:text-indigo-950"}>License</Link></p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterComponent;