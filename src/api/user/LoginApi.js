import Api from "../Api";

class LoginApi {
    static login = (email, password) => {
        const api = new Api("/v2/user/login");

        const data = {
            email: email,
            password: password
        };

        return api.post(data);
    };

    static loginWithApple = (code, name = null) => {
        const api = new Api("/v2/user/login/apple");

        return api.post({code, name});
    };

    static verify = async () => {
        const api = new Api("/v2/user/verify");

        const resp = await api.get();

        if(resp.status === 401) {
            this.signOut();
            return;
        }

        return resp;
    };
}

export default LoginApi;