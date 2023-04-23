import React from "react";
import PropTypes from "prop-types";

const Input = ({className, type, invert, label, placeholder, ...props}) => {
    const classes = [
        "py-3",
        "px-4",
        "w-full",
        "bg-gray-100",
        "border-gray-200",
        "rounded-md",
        "text-sm",
        "focus:border-indigo-500",
        "focus:ring-indigo-500",
        "focus:ring-opacity-50",
        "focus:outline-none"
    ];

    if(invert) {
        classes.push("bg-white");
    }

    const classList = className ? classes.join(" ") + " " + className : classes.join(" ");

    return (
        <>
            <span className={"text-gray-700"}>{label}</span>
            <input className={classList} type={type} placeholder={placeholder} {...props} />
        </>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    invert: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string
};

export default Input;