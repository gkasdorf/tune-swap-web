import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import ProtectedRoute from "../../AuthProvider";
import {Container} from "react-bootstrap";
import {useEffect} from "react";

/**
 *
 * @param fluid {boolean|string}
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const ProtectedRouteContainer = ({fluid = true, children}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <ProtectedRoute>
            <div className={"App"}>
                <NavBar />
                <div className={"body"}>
                    <Container fluid={fluid}>
                        { children }
                    </Container>
                </div>
                <Footer />
            </div>
        </ProtectedRoute>
    )
};

export default ProtectedRouteContainer;