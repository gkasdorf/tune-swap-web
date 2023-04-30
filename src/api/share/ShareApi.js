import Api from "../Api";

class ShareApi {
    static create = (service, id) => {
        const api = new Api("/v2/share/create");

        const data = {
            playlist_service: service,
            playlist_id: id
        };

        return api.post(data);
    };

    static get = (id) => {
        const api = new Api(`/v2/share/${id}`);

        return api.get();
    };

    static getAll = () => {
        const api = new Api("/v2/share");

        return api.get();
    };

    static delete = (id) => {
        const api = new Api(`/v2/share/${id}/delete`);

        return api.get();
    };

    static startCopy = (id, service) => {
        const api = new Api(`/v2/share/${id}/copy`);

        const data = {
            service: service
        };

        return api.post(data);
    };

    static getCopy = (id) => {
        const api = new Api(`/v2/share/copy/${id}`);

        return api.get();
    };
}

export default ShareApi;
