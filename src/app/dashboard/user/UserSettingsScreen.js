import React, {useState} from "react";
import ProtectedRoute from "../../wrappers/ProtectedRoute";
import MainWrapper from "../../wrappers/MainWrapper";
import {useDispatch, useSelector} from "react-redux";
import InputWrapper from "../../ui/input/InputWrapper";
import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import Modal from "../../ui/modal/Modal";
import DeleteApi from "../../../api/user/DeleteApi";
import {useNavigate} from "react-router-dom";
import {clearUser} from "../../../slices/userSlice";
import Alert from "../../ui/alert/Alert";
import SettingsApi from "../../../api/user/SettingsApi";

const UserSettingsScreen = () => {
    const { name, email } = useSelector(state => state.user);

    const [showConfirmDelete, setShowConfirmDelete] = React.useState(false);

    const [generalForm, setGeneralForm] = React.useState({
        name: name,
        email: email,
        password: ""
    });
    const [generalFormError, setGeneralFormError] = useState({
        error: false,
        message: "",
        variant: "warning"
    });

    const [passwordForm, setPasswordForm] = React.useState({
        password: "",
        newPassword: "",
        newPasswordConfirmed: ""
    });
    const [passwordFormError, setPasswordFormError] = useState({
        error: false,
        message: "",
        variant: "warning"
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGeneralFormChange = (e) => {
        setGeneralForm({
            ...generalForm,
            [e.target.name]: e.target.value
        });
    };

    const handlePasswordFormChange = (e) => {
        setPasswordForm({
            ...passwordForm,
            [e.target.name]: e.target.value
        });
    };

    const onGeneralFormSubmit = async (e) => {
        e.preventDefault();

        const res = await SettingsApi.updateNameEmail({
            name: generalForm.name,
            email: generalForm.email,
            password: generalForm.password
        });

        if(!res.success) {
            setGeneralFormError({
                error: true,
                message: res.data.message,
                variant: "warning"
            });
            return;
        }

        setGeneralFormError({
            error: true,
            message: res.data.message,
            variant: "success"
        });
    };

    const onPasswordFormSubmit = async (e) => {
        e.preventDefault();

        if(!Object.values(passwordForm).some(v => v)) {
            setPasswordFormError( {
                error: true,
                message: "All fields are required.",
                variant: "warning"
            });
            return;
        }

        if (passwordForm.newPassword !== passwordForm.newPasswordConfirmed) {
            setPasswordFormError({
                error: true,
                message: "Passwords must match.",
                variant: "warning"
            });
            return;
        }

        const res = await SettingsApi.updatePassword({
            password: passwordForm.password,
            newPassword: passwordForm.newPassword,
            newPasswordConfirmed: passwordForm.newPasswordConfirmed
        });

        if(!res.success) {
            setPasswordFormError({
                error: true,
                message: res.data.message,
                variant: "warning"
            });

            return;
        }

        setPasswordFormError({
            error: true,
            message: res.data.message,
            variant: "success"
        });
    };

    const onConfirmDeleteClick = async () => {
        const res = await DeleteApi.delete();

        if(!res.success) {
            alert("An error occurred. Please let us know.");
            return;
        }

        dispatch(clearUser());
        navigate("/");
    };

    return (
        <ProtectedRoute>
            <MainWrapper>
                <div className={"bg-gray-100"}>
                    <div className={"py-10 px-5"}>
                        <div className={"mb-3"}>
                            <h3 className={"text-3xl font-semibold text-gray-800"}>User Settings</h3>
                        </div>
                        <div className={"grid grid-cols-1 lg:grid-cols-4 gap-4"}>
                            <div className={"lg:col-span-1"}>
                                <div className={"bg-white rounded-lg shadow-lg p-4"}>
                                    <h3 className={"text-3xl font-semibold"}>{name}</h3>
                                    <p className={"text-lg"}>{email}</p>
                                    <p>Free User</p>
                                </div>
                            </div>
                            <div className={"lg:col-span-3"}>
                                <div className={"bg-white rounded-lg shadow-lg p-4"}>
                                    <h3 className={"text-3xl font-semibold"}>General Information</h3>
                                    <Alert visible={generalFormError.error} variant={generalFormError.variant}>
                                        {generalFormError.message}
                                    </Alert>
                                    <form onSubmit={onGeneralFormSubmit}>
                                        <div className={"flex flex-wrap"}>
                                            <div className={"w-full lg:w-1/2 lg:pr-1.5"}>
                                                <InputWrapper>
                                                    <Input
                                                        label={"Name"}
                                                        type={"text"}
                                                        value={name}
                                                        name={"name"}
                                                        onChange={handleGeneralFormChange}
                                                    />
                                                </InputWrapper>
                                            </div>
                                            <div className={"w-full lg:w-1/2 lg:pl-1.5"}>
                                                <InputWrapper>
                                                    <Input
                                                        label={"Email"}
                                                        type={"email"}
                                                        value={email}
                                                        name={"email"}
                                                        onChange={handleGeneralFormChange}
                                                    />
                                                </InputWrapper>
                                            </div>
                                        </div>
                                        <div className={"flex flex-wrap"}>
                                            <div className={"w-full"}>
                                                <InputWrapper>
                                                    <Input
                                                        label={"Enter your password to submit changes"}
                                                        placeholder={"Password"}
                                                        type={"password"}
                                                        name={"password"}
                                                        onChange={handleGeneralFormChange}
                                                    />
                                                </InputWrapper>
                                            </div>
                                        </div>
                                        <div className={"flex flex-wrap"}>
                                            <div className={"w-full"}>
                                                <Button className={"float-right"} type={"submit"}>Submit</Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className={"lg:col-span-3 lg:order-4"}>
                                <div className={"bg-white rounded-lg shadow-lg p-4"}>
                                    <h3 className={"text-3xl font-semibold"}>Change Password</h3>
                                    <Alert visible={passwordFormError.error} variant={passwordFormError.variant}>
                                        {passwordFormError.message}
                                    </Alert>
                                    <form onSubmit={onPasswordFormSubmit}>
                                        <div className={"flex flex-wrap"}>
                                            <div className={"w-full lg:w-1/2 lg:pr-1.5"}>
                                                <InputWrapper>
                                                    <Input
                                                        label={"New Password"}
                                                        placeholder={"New Password"}
                                                        type={"password"}
                                                        name={"newPassword"}
                                                        onChange={handlePasswordFormChange}
                                                    />
                                                </InputWrapper>
                                            </div>
                                            <div className={"w-full lg:w-1/2 lg:pl-1.5"}>
                                                <InputWrapper>
                                                    <Input
                                                        label={"Confirm New Password"}
                                                        placeholder={"Confirm New Password"}
                                                        type={"password"}
                                                        name={"newPasswordConfirmed"}
                                                        onChange={handlePasswordFormChange}
                                                    />
                                                </InputWrapper>
                                            </div>
                                        </div>
                                        <div className={"flex flex-wrap"}>
                                            <div className={"w-full"}>
                                                <InputWrapper>
                                                    <Input
                                                        label={"Enter your current password to submit changes"}
                                                        placeholder={"Password"}
                                                        type={"password"}
                                                        name={"password"}
                                                        onChange={handlePasswordFormChange}
                                                    />
                                                </InputWrapper>
                                            </div>
                                        </div>
                                        <div className={"flex flex-wrap"}>
                                            <div className={"w-full"}>
                                                <Button className={"float-right"} type={"submit"}>Submit</Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className={"lg:col-span-1 lg:order-3"}>
                                <div className={"bg-white rounded-lg shadow-lg p-4"}>
                                    <h3 className={"text-3xl font-semibold"}>Delete Account</h3>
                                    <p className={"text-md xl:text-sm"}>
                                        Once you delete your account, all user data will be deleted. Any active
                                        subscriptions will be cancelled and you will lose access to all premium
                                        features.
                                    </p>
                                    <br />
                                    <Button
                                        className={"w-full"}
                                        onClick={() => setShowConfirmDelete(true)}
                                    >
                                        Delete Account
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Modal
                    visible={showConfirmDelete}
                    setModalVisible={setShowConfirmDelete}
                    title={"Delete your account?"}
                    buttonText={"Cancel"}
                    buttonVariant={"secondary"}
                    onConfirmClick={onConfirmDeleteClick}
                    confirmText={"Delete Account"}
                >
                    <p>
                        Are you sure you wish to delete your account? Any active subscriptions will be cancelled and
                        all user data will be deleted.
                    </p>
                    <p>
                        Although you will be unable to recover your account, it may take up to 48 hours for all
                        user data to be deleted from our servers.
                    </p>
                </Modal>
            </MainWrapper>
        </ProtectedRoute>
    );
};

export default UserSettingsScreen;