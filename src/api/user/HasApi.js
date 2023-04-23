import MusicService from "../../models/MusicService";
import Api from "../Api";

class HasApi {
    /**
     * Check if the user has a given service
     * @param {MusicService} service
     * @return {boolean}
     */
    static async check(service) {
        let api = null;

        switch(service) {
        case MusicService.Spotify: {
            api = new Api("/v2/user/has/spotify");
            break;
        }
        case MusicService.AppleMusic: {
            api = new Api("/v2/user/has/applemusic");
            break;
        }
        case MusicService.Tidal: {
            api = new Api("/v2/user/has/tidal");
            break;
        }
        default: {
            api = null;
            break;
        }
        }

        if(!api) {
            return false;
        }

        const res = await api.get();
        return res.data.has;
    }
}

export default HasApi;