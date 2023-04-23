import axios from "axios";
import * as querystring from "querystring";
import ApiResponse from "./ApiResponse";

const baseUrl = process.env.REACT_APP_BASE_URL;

class Api {
    /**
     * Creates an API instance
     * @param url {string}
     * @param token {?string}
     */
    constructor(url, token = "") {
        let headers = { // Default headers
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        };

        let options = { // Default options
            headers: headers,
        };

        if(token !== "") { // If a token is passed, use it
            headers["Authorization"] = `Bearer ${token}`;
        } else if(localStorage.getItem("token")) { // If no token is passed, check if there is one in local storage
            headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
        }

        this.options = options;

        this.url = baseUrl + url;
    }

    /**
     * Posts the passed data
     * @param data {Object}
     * @returns {Promise<ApiResponse>}
     */
    post = async(data) => {
        try {
            const resp = await axios.post(this.url, data, this.options);

            return new ApiResponse({
                success: true,
                status: resp.status,
                data: resp.data
            });
        } catch(e) {
            if(process.env.REACT_APP_DEV) {
                console.log(e);
            }

            return new ApiResponse({
                success: false,
                status: e.response.status,
                data: e.response.data,
            });
        }
    };

    /**
     * Sends GET request to the specified URL. If data is passed, it will be formed to a URL query string.
     * @param data {?Object}
     * @returns {Promise<ApiResponse>}
     */
    get = async(data = null) => {
        let url;

        if(data) { // If data is passed, form it to a query string
            const query = querystring.stringify(data);
            url = `${this.url}?${query}`;
        } else { // If no data is passed, use the URL
            url = this.url;
        }

        try {
            const resp = await axios.get(url, this.options);

            return new ApiResponse({
                success: true,
                status: resp.status,
                data: resp.data
            });
        } catch(e) {
            if(process.env.REACT_APP_DEV) {
                console.log(e);
            }

            return new ApiResponse({
                success: false,
                status: e.response.status,
                data: e.response.data
            });
        }
    };
}

export default Api;