import {Button, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";

const TidalModal = ({showTidalModal, setShowTidalModal}) => {
    return (
        <Modal show={showTidalModal}>
            <Modal.Header>
                <Modal.Title>Tidal Authentication</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Because Tidal does not offer a public API, we are not able to perform authentication with Tidal in
                    the browser. Instead, you must download our app to authenticate with Tidal.</p>

                <p>We understand that this is not ideal, however there are currently no other options. We are in contact
                    with Tidal to attempt to obtain API access. If you like, you may reach out to Tidal and request that
                    API access be granted to TuneSwap.</p>

                <p>Once you download the app, please sign in to your TuneSwap account and navigate to Settings->Tidal.
                    You will be presented with the Tidal login screen. Once you have successfully authenticated, you may
                    either use the app to perform your swap or just come back here and press the Tidal button again.</p>

                <p>We are very sorry for the inconvenience!</p>
            </Modal.Body>
            <Modal.Footer>
                <Link to={"https://apps.apple.com/us/app/tuneswap/id6447500724"} target="_blank" rel="noopener noreferrer"><Button variant={"primary"}>Download on the App Store</Button></Link>
                <Button variant={"secondary"} onClick={() => setShowTidalModal(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default TidalModal;