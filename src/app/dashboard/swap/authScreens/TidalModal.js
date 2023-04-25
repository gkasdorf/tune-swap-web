import React from "react";
import Modal from "../../../ui/modal/Modal";
import PropTypes from "prop-types";

const TidalModal = ({visible, setVisible}) => {
    return (
        <Modal
            visible={visible}
            setModalVisible={setVisible}
            title={"Tidal Authentication"}
            confirmText={"Download on the App Store"}
            confirmVariant={"success"}
            onConfirmClick={() => {
                setTimeout(window.open("https://apps.apple.com/us/app/tuneswap/id6447500724"));
            }}
        >
            <p>Because Tidal does not offer a public API, we are not able to perform authentication with Tidal in
                the browser. Instead, you must download our app to authenticate with Tidal.</p>
            <br />
            <p>We understand that this is not ideal, however there are currently no other options. We are in contact
                with Tidal to attempt to obtain API access. If you like, you may reach out to Tidal and request that
                API access be granted to TuneSwap.</p>
            <br />
            <p>We are very sorry for the inconvenience!</p>
        </Modal>
    );
};

TidalModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired
};

export default TidalModal;