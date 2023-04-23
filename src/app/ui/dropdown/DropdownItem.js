import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Dropdown Item
 * @param to {string}
 * @param image {JSX.Element}
 * @param children {JSX.Element}
 * @param props {object}
 * @return {JSX.Element}
 * @constructor
 */
const DropdownItem = ({ to, image, children, ...props }) => {
    return (
        <>
            {!to ?
                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 hover:cursor-pointer"
                    {...props}>
                    { image ? {image} : null }
                    {children}
                </a>

                : <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                    to={to}
                    {...props}
                >
                    { image ? {image} : null }
                    {children}
                </Link>
            }
        </>
    );
};

DropdownItem.propTypes = {
    to: PropTypes.string,
    image: PropTypes.element,
    children: PropTypes.element.isRequired
};

export default DropdownItem;