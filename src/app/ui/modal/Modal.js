import React from "react";
import Button from "../button/Button";
import PropTypes from "prop-types";

const Modal = (
    {
        title,
        setModalVisible,
        visible = false,
        buttonVariant = "primary",
        buttonText = "Close",
        onConfirmClick = null,
        confirmText = "Confirm",
        confirmVariant = "danger",
        children
    }
) => {
    if(!visible) return null;

    return (
        <div
            className={"flex justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-500 bg-opacity-70 backdrop-blur-sm overscroll-contain"}
        >
            <div className={"w-full my-6 max-w-3xl mx-5 lg:mx-auto mt-24 lg:mt-36 mb-20 lg:mb-36"}>
                <div className={"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none max-h-full"}>
                    <div className={"flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t"}>
                        <h3 className={"text-3xl font-semibold"}>
                            {title}
                        </h3>
                    </div>
                    <div className={"relative p-6 flex-auto h-auto overflow-y-scroll"}>
                        {children}
                    </div>
                    <div className={"flex items-center justify-end p-3 border-t border-solid border-gray-300 rounded-b"}>
                        <Button onClick={() => setModalVisible(false)} variant={buttonVariant}>{buttonText}</Button>
                        {
                            onConfirmClick && (
                                <Button
                                    onClick={onConfirmClick}
                                    className={"ml-2"}
                                    variant={confirmVariant}
                                >
                                    {confirmText}
                                </Button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    setModalVisible: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    visible: PropTypes.bool.isRequired,
    onConfirmClick: PropTypes.func,
    buttonVariant: PropTypes.string,
    buttonText: PropTypes.string,
    confirmText: PropTypes.string,
    confirmVariant: PropTypes.string
};

export default Modal;