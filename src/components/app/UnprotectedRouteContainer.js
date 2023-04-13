import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import {Container} from "react-bootstrap";
import {useEffect} from "react";

/**
 *
 * @param fluid {boolean|string}
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const UnprotectedRouteContainer = ({fluid = true, children}) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className={"App"}>
            <NavBar />
            <div className={"body"}>
                <Container fluid={fluid}>
                    { children }
                </Container>
            </div>
            <Footer />
        </div>
    )
};

export default UnprotectedRouteContainer;