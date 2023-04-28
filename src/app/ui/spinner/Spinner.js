import React from "react";
import PropTypes from "prop-types";

const Spinner = ({center = false}) => {
    const classes = [
        "flex",
        "justify-center",
    ];

    if(center) classes.push("items-center");

    const classStr = classes.join(" ");

    return (
        <div className={classStr}>
            <div
                className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
};

Spinner.propTypes = {
    center: PropTypes.bool
};

export default Spinner;