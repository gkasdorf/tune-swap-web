import Api from "../Api";

class ShareApi {
    static create(service, id) {
        const api = new Api("/v2/share/create");

        const data = {
            playlist_service: service,
            playlist_id: id
        };

        return api.post(data);
    }

    static get(id) {
        const api = new Api(`/v2/share/${id}`);

        return api.get();
    }
}

export default ShareApi;