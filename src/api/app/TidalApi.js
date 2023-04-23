import Api from "../Api";

class TidalApi {
    static getAuthUrl = () => {
        const api = new Api("/v2/tidal/authUrl");

        return api.get();
    };

    static auth = (code, codeVerifier) => {
        const api = new Api("/v2/tidal/auth");

        return api.post({
            code,
            codeVerifier
        });
    };

    static getUserPlaylists = () => {
        const api = new Api("/v2/tidal/me/playlists");

        return api.get();
    };
}

export default TidalApi;