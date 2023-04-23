import React from "react";
import DropdownHeader from "./DropdownHeader";
import PropTypes from "prop-types";

/**
 * Dropdown component
 * @param text {string}
 * @param headerTop {string}
 * @param headerBottom {string}
 * @param children {JSX.Element}
 * @return {JSX.Element}
 * @constructor
 */
const Dropdown = ({text, headerTop, headerBottom, children}) => {
    return (
        <div className="hs-dropdown relative inline-flex">
            <button
                id={headerTop ? "#hs-dropdown-with-header" : ""}
                type={"button"}
                className={"text-gray-600 hover:border-indigo-500 border-2 rounded-lg bg-white px-3 py-2"}
            >
                {text}&nbsp;
                <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600 inline" width="16" height="16"
                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
            <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700">
                {headerTop ?
                    <DropdownHeader textTop={headerTop} textBottom={headerBottom}/> : null
                }
                <div className="mt-2 py-2 first:pt-0 last:pb-0">
                    {children}
                </div>
            </div>
        </div>
    );
};

Dropdown.propTypes = {
    text: PropTypes.string.isRequired,
    headerTop: PropTypes.string,
    headerBottom: PropTypes.string,
    children: PropTypes.element.isRequired
};

export default Dropdown;