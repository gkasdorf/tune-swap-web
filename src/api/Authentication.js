import Api from "./Api";

class Authentication {
    /**
     * Sign in a user
     * @param data {{password: string, email: string}}
     * @returns {Promise<{success: boolean}|{data: *, success: boolean, status: number}>}
     */
    static signin = (data) => {
        const api = new Api("/user/auth");

        return api.post(data);
    }

    /**
     * Sign up a user
     * @param data {{name: string, email: string, password: string, passwordAgain: string}}
     * @returns {Promise<{success: boolean}|{data: *, success: boolean, status: number}>}
     */
    static signup = (data) => {
        const api = new Api("/user/register");

        return api.post(data);
    }

    /**
     * Make the verify request
     * @param apiToken
     * @returns {Promise<{success: boolean}|{data: *, success: boolean, status: number}>}
     */
    static verify = (apiToken) => {
        const api = new Api("/user/verify", apiToken);

        return api.get();
    }
}

export default Authentication;