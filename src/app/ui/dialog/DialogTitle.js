import React from "react";
import PropTypes from "prop-types";

const DialogTitle = ({button = null, children}) => {
    return (
        <div className={"mb-5"}>
            <h1 className={"text-center text-2xl mb-2"}>
                {children}
                {button &&
                    <div className={"float-right text-sm"}>
                        {button}
                    </div>
                }
            </h1>
            <hr />
        </div>
    );
};

DialogTitle.propTypes = {
    button: PropTypes.node,
    children: PropTypes.node.isRequired
};

export default DialogTitle;