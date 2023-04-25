import React from "react";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";

const UnprotectedRoute = ({ redirect = false, children }) => {
    const { isAuthed } = useSelector(state => state.user);

    if(isAuthed && redirect) {
        return <Navigate to={"/app"} />;
    }

    return children;
};

UnprotectedRoute.propTypes = {
    redirect: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default UnprotectedRoute;