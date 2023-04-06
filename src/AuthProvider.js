import {useNavigate} from "react-router-dom";
import User from "./models/User";
import React, {useEffect, useState} from "react";
import Authentication from "./api/Authentication";
import {Card, Col, Row, Spinner} from "react-bootstrap";
import UnprotectedRouteContainer from "./components/app/UnprotectedRouteContainer";

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isAuthed, setIsAuthed] = useState(false);

    const checkUser = async () => {
        const user = User.load();

        if(!user) {
            setIsAuthed(false);
            return navigate("/signin");
        }

        const verify = await Authentication.verify(user.getApiToken());

        if(verify.data.code !== 1000) {
            setIsAuthed(false);
            await User.clear();

            return navigate("/signin");
        }

        setIsAuthed(true);
    }

    useEffect(() => {
        checkUser();
    }, []);

    return (
        <React.Fragment>
            {isAuthed &&
                props.children
            }
            {!isAuthed &&
                <UnprotectedRouteContainer>
                    <br /><br /><br />
                    <div className={"d-flex justify-content-center"}>
                        <Spinner animation={"border"} role={"status"}/>
                    </div>
                    <br/>
                    <div className={"text-center"}>
                        <span>Loading...</span>
                    </div>
                </UnprotectedRouteContainer>
            }
        </React.Fragment>
    );
}

export default ProtectedRoute;