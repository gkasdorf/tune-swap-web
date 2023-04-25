import Api from "../Api";

class SwapApi {
    /**
     * Start a new swap
     * @param swap
     * @return {Promise<ApiResponse>}
     */
    static start = (swap) => {
        const api = new Api("/v2/swap/start");

        const data = {
            ...swap
        };

        return api.post(data);
    };

    /**
     * Get all swaps for a user
     * @param limit
     * @param offset
     * @return {Promise<ApiResponse>}
     */
    static getAll = async (limit = 5, offset = 0) => {
        const api = new Api("/v2/swap");

        const data = {
            limit,
            offset
        };

        return api.get(data);
    };

    /**
     * Get a swap by id
     * @param id
     * @return {Promise<ApiResponse>}
     */
    static get = (id) => {
        const api = new Api(`/v2/swap/${id}`);

        return api.get();
    };

    /**
     * Get the songs that were not found from a swap
     * @param id
     * @return {Promise<ApiResponse>}
     */
    static getNotFound = (id) => {
        const api = new Api(`/v2/swap/${id}/notfound`);

        return api.get();
    };
}

export default SwapApi;