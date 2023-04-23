import React from "react";
import NavBarComponent from "../navigation/NavBarComponent";
import FooterComponent from "../navigation/FooterComponent";
import PropTypes from "prop-types";

const MainWrapper = ({children}) => {
    return (
        <>
            <NavBarComponent />
            {children}
            <FooterComponent />
        </>
    );
};

MainWrapper.propTypes = {
    children: PropTypes.node.isRequired
};

export default MainWrapper;