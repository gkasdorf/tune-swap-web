import Api from "../Api";

class SignupApi {
    static register = (data) => {
        const api = new Api("/v2/user/signup");

        return api.post(data);
    };
}

export default SignupApi;