import Api from "../Api";

class LoginApi {
    /**
     * Make login request
     * @param email
     * @param password
     * @return {Promise<ApiResponse>}
     */
    static login = (email, password) => {
        const api = new Api("/v2/user/login");

        const data = {
            email: email,
            password: password
        };

        return api.post(data);
    };

    /**
     * Make login w/ Apple request
     * @param code
     * @param name
     * @return {Promise<ApiResponse>}
     */
    static loginWithApple = (code, name = null) => {
        const api = new Api("/v2/user/login/apple");

        return api.post({code, name});
    };

    /**
     * Make a verification attempt
     */
    static verify = async () => {
        const api = new Api("/v2/user/verify");

        const resp = await api.get();

        if(resp.status === 401) {
            return;
        }

        return resp;
    };
}

export default LoginApi;