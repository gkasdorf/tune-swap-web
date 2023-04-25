import Api from "../Api";

class AppleMusicApi {
    static getUserPlaylists = () => {
        const api = new Api("/v2/applemusic/me/playlists");

        return api.get();
    };
}

export default AppleMusicApi;