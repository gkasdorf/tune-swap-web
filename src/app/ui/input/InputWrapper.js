import React from "react";
import PropTypes from "prop-types";

const InputWrapper = ({children, ...props}) => {
    return (
        <div className={"my-3"} {...props}>
            {children}
        </div>
    );
};

InputWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default InputWrapper;