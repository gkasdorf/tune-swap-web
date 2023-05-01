import React from "react";
import PropTypes from "prop-types";

const h2 = ({bold = false, className, centered, children}) => {
    const classes = makeClassString("text-2xl", bold, centered, className);

    return (
        <h2 className={classes}>
            {children}
        </h2>
    );
};

const h3 = ({bold = false, className, centered, children}) => {
    const classes = makeClassString("text-xl", bold, centered, className);

    return (
        <h3 className={classes}>
            {children}
        </h3>
    );
};

const makeClassString = (size, bold, center, className) => {
    const classes = [
        size,
        "mb-3"
    ];

    if(bold) classes.push("font-bold");
    if(center) classes.push("text-center");

    if(className) className.split(" ").forEach((val) => classes.push(val));

    return classes.join(" ");
};

const propTypes = {
    bold: PropTypes.bool,
    className: PropTypes.string,
    centered: PropTypes.bool,
    children: PropTypes.node.isRequired
};

h2.propTypes = propTypes;
h3.propTypes = propTypes;


const Headers = {
    h2,
    h3
};

export default Headers;