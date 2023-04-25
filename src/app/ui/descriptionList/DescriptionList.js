import React from "react";
import PropTypes from "prop-types";

const DescriptionList = ({children}) => {
    return (
        <div className={"border-gray-200 border"}>
            <dl className={"text-lg"}>
                {children}
            </dl>
        </div>
    );
};

const DescriptionListItem = ({children, className}) => {

    return (
        <dt className={`bg-white px-4 py-2 border-b hover:bg-gray-50 ${className}`}>
            {children}
        </dt>
    );
};

DescriptionList.propTypes = {
    children: PropTypes.node.isRequired,
};

DescriptionListItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export {DescriptionList, DescriptionListItem};