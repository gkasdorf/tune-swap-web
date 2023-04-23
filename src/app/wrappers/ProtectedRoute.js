import {useSelector} from "react-redux";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children }) => {
    const { isAuthed } = useSelector(state => state.user);

    return isAuthed ? children : null;
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;