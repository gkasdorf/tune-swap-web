import React from "react";
import MusicServiceLogo from "../../../models/MusicServiceLogo";
import PropTypes from "prop-types";

const SwapServiceButton = ({service, ...props}) => {
    return (
        <div className={"w-1/2 sm:w-1/3 md:w-1/4 p-2"}>
            <div className={"w-full h-full bg-indigo-200 hover:bg-indigo-400 hover:cursor-pointer px-3 py-5 shadow-lg rounded-lg overflow-hidden"} {...props}>
                <div className={"flex h-full w-full items-center justify-center"}>
                    <img src={MusicServiceLogo(service)} alt={service}/>
                </div>
            </div>
        </div>
    );
};

SwapServiceButton.propTypes = {
    service: PropTypes.string.isRequired
};

export default SwapServiceButton;