import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const UnprotectedRoute = ({ redirect = false, children }) => {
    const { isAuthed } = useSelector(state => state.user);
    const navigate = useNavigate();

    if(isAuthed && redirect) {
        navigate("/app");
        return;
    }

    return children;
};

UnprotectedRoute.propTypes = {
    redirect: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default UnprotectedRoute;