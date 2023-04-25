import React from "react";
import PropTypes from "prop-types";

const Dialog = ({max = "max-w-2xl", children}) => {
    return (
        <div className={"flex flex-col items-center"}>
            <div className={`w-full ${max}`}>
                <div className={"bg-white shadow-md rounded px-4 md:px-8 pt-6 pb-8 mb-4"}>
                    {children}
                </div>
            </div>
        </div>
    );
};

Dialog.propTypes = {
    max: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default Dialog;