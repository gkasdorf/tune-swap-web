import React from "react";
import PropTypes from "prop-types";

const Spinner = ({center = false, text = false}) => {
    const classes = [
        "flex",
        "flex-wrap",
        "justify-center",
    ];

    if(center) classes.push("items-center");

    const classStr = classes.join(" ");

    return (
        <div className={classStr}>
            <div
                className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
            {
                text && (
                    <p className={"w-full text-center mt-6"}>Loading...</p>
                )
            }
        </div>
    );
};

Spinner.propTypes = {
    center: PropTypes.bool,
    text: PropTypes.bool
};

export default Spinner;