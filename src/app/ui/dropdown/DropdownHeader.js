import React from "react";
import PropTypes from "prop-types";

/**
 * Dropdown Header
 * @param textTop {string}
 * @param textBottom {string}
 * @return {JSX.Element}
 * @constructor
 */
const DropdownHeader = ({textTop, textBottom}) => {
    return (
        <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">{textTop}</p>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-300">{textBottom}</p>
        </div>
    );
};

DropdownHeader.propTypes = {
    textTop: PropTypes.string.isRequired,
    textBottom: PropTypes.string.isRequired,
};

export default DropdownHeader;