class ApiResponse {
    /**
     * Whether the request was successful or not.
     * @type {boolean}
     */
    reqSuccess = false;
    /**
     * The status code of the response
     * @type {?number}
     */
    status = null;
    /**
     * The data from the response
     * @type {?Object}
     */
    data = null;
    /**
     * Whether the request AND response were successful or not.
     * @type {boolean}
     */
    success = false;

    constructor(resp) {
        this.reqSuccess = resp.success;
        this.status = resp.status;
        this.data = resp.data;
        this.success = (resp.success && resp.data.success);
    }

    /**
     * Returns whether the response was an error.
     * @return {boolean}
     */
    isError = () => {
        const first = String(this.status).charAt(0);

        return first === "5";
    };

    /**
     * Returns whether the response was a fail.
     * @return {boolean}
     */
    isFail = () => {
        const first = String(this.status).charAt(0);

        return first === "4";
    };
}

export default ApiResponse;