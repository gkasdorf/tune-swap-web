import Api from "../Api";

class DeleteApi {
    static delete = (password) => {
        const api = new Api("/v2/user/delete");

        const data = {
            password: password
        };

        return api.post(data);
    }
}

export default DeleteApi;