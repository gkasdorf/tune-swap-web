import Api from "../Api";

class DeleteApi {
    /**
     * Delete an account
     * @param password
     * @return {Promise<ApiResponse>}
     */
    static delete = () => {
        const api = new Api("/v2/user/delete");

        return api.post({});
    };
}

export default DeleteApi;