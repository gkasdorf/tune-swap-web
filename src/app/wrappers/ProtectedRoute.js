import React from "react";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { isAuthed } = useSelector(state => state.user);

    return isAuthed ? children : <Navigate to={"/login"} /> ;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;