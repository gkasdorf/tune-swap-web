import React from "react";
import PropTypes from "prop-types";

const Alert = ({variant, children, visible}) => {
    const bgColor = () => {
        switch(variant) {
        case "success": {
            return "bg-green-100";
        }
        case "warning": {
            return "bg-yellow-100";
        }
        case "danger": {
            return "bg-red-100";
        }
        default: {
            return "bg-blue-100";
        }
        }
    };

    if(!visible) return null;

    return (
        <>
            <div className={"my-3"}>
                <div className={`flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 ${bgColor()}`}>
                    <div className={"py-2 text-md"}>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

Alert.propTypes = {
    variant: PropTypes.oneOf(["success", "warning", "danger"]),
    visible: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export default Alert;