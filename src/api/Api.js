import axios from "axios";
import * as querystring from "querystring";
import User from "../models/User";

const baseUrl = process.env.REACT_APP_BASE_URL;

class Api {
    constructor(url, apiToken = "") {
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        };

        let options = {
            headers: headers
        };

        if (apiToken !== "") {
            headers["Authorization"] = `Bearer ${apiToken}`;
        } else {
            const user = User.load();

            if(user) {
                headers["Authorization"] = `Bearer ${user.getApiToken()}`;
            }
        }

        this.options = options;

        this.url = baseUrl + url;
    }

    /**
     * Submit a post request to the API server
     * @param data Data to submit
     * @returns {Promise<{success: boolean}|{data: any, success: boolean, status: number}>}
     */
    post = async (data) => {
        try {
            const resp = await axios.post(this.url, data, this.options);

            return {
                success: true,
                status: resp.status,
                data: resp.data
            }
        } catch(e) {
            if(process.env.REACT_APP_DEV) {
                console.log(e);
            }

            return {
                success: false
            }
        }
    }

    /**
     * Submit a get request to the API server
     * @param data Data to submit
     * @returns {Promise<{success: boolean}|{data: any, success: boolean, status: number}>}
     */
    get = async (data = null) => {
        let url;

        if(data) {
            const query = querystring.stringify(data);
            url = this.url + "?" + query;
        } else {
            url = this.url;
        }

        try {
            const resp = await axios.get(url, this.options);

            return {
                success: true,
                status: resp.status,
                data: resp.data
            }
        } catch(e) {
            if(process.env.REACT_APP_DEV) {
                console.log(e);
            }

            return {
                success: false
            }
        }
    }
}

export default Api;