import Api from "../Api";

class SettingsApi {
    /**
     * Update a user's name or email
     * @param data {{
     *     name: string,
     *     email: string,
     *     password: string
     * }}
     * @return {Promise<ApiResponse>}
     */
    static updateNameEmail = (data) => {
        const api = new Api("/v2/user/settings/name-email");

        return api.post(data);
    };

    /**
     * Update a user's password
     * @param data {{
     *     newPassword: string,
     *     newPasswordConfirmed: string,
     *     password: string
     * }}
     * @return {Promise<ApiResponse>}
     */
    static updatePassword = (data) => {
        const api = new Api("/v2/user/settings/password");

        return api.post(data);
    };
}

export default SettingsApi;