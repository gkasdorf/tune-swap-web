import React from "react";
import PropTypes from "prop-types";

/**
 * Button component
 * @param variant {string: "primary"|"success"|"warning"|"danger"}
 * @param className {string}
 * @param children {JSX.Element}
 * @param onClick {function}
 * @param disabled {boolean}
 * @param outline {boolean}
 * @param loading {boolean}
 * @param props {object}
 * @return {JSX.Element}
 * @constructor
 */
const Button = (
    {
        variant,
        className,
        children,
        onClick,
        disabled = false,
        outline = false,
        ...props
    }
) => {
    const background = () => {
        if(disabled) {
            return "bg-gray-500 text-white";
        }

        if(outline) {
            return "bg-white";
        }

        switch(variant) {
        case "success": {
            return "bg-green-500 text-white";
        }
        case "warning": {
            return "bg-yellow-500 text-white";
        }
        case "danger": {
            return "bg-red-500 text-white";
        }
        case "secondary": {
            return "bg-gray-500 text-white";
        }
        default: {
            return "bg-indigo-500 text-white";
        }
        }
    };

    const textColor = () => {
        if(outline) {
            return "text-black border-2 border-indigo-500";
        }
    };

    const hover = () => {
        if(disabled) {
            return;
        }

        if(outline) {
            return "hover:bg-indigo-500 hover:text-white";
        }

        switch(variant) {
        case "success": {
            return "hover:bg-green-600";
        }
        case "warning": {
            return "hover:bg-yellow-600";
        }
        case "danger": {
            return "hover:bg-red-600";
        }
        case "secondary": {
            return "hover:bg-gray-600";
        }
        default: {
            return "hover:bg-indigo-600";
        }
        }
    };

    const handleClick = (e) => {
        if(!onClick || disabled) {
            return;
        }

        onClick(e);
    };

    return (
        <button
            className={`py-2 px-4 rounded-md text-md focus:outline-none
            ${background()} ${hover()} ${textColor() ?? ""} ${className ?? ""}`}
            {...props}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(["primary", "success", "warning", "danger", "secondary"]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
};

export default Button;