import React, {useEffect} from "react";
import NavBarComponent from "../navigation/NavBarComponent";
import FooterComponent from "../navigation/FooterComponent";
import PropTypes from "prop-types";

const MainWrapper = ({children}) => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

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