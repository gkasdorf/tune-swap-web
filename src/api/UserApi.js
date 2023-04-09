import Api from "./Api";
import MusicService from "../models/MusicService";
import Spotify from "./app/Spotify";
import AppleMusic from "./app/AppleMusic";

class UserApi {
    /**
     *
     * @param limit {number}
     * @param offset {number}
     */
    static getSwaps = (limit, offset = 0) => {
        const api = new Api("/swap");

        const data = {
            limit: limit,
            offset: offset
        };

        return api.get(data);
    }

    static getSwap = (id) => {
        const api = new Api("/swap/" + id);

        return api.get();
    }

    /**
     *
     * @param data {fromService: string, toService: string, playlistId: string, playlistName: string}
     * @returns {Promise<{success: boolean}|{data: *, success: boolean, status: number}>}
     */
    static createSwap = (data) => {
        const api = new Api("/swap/start");

        return api.post(data);
    }

    static getUserPlaylists = (service) => {
        switch(service) {
            case MusicService.Spotify: {
                return Spotify.getUserPlaylists();
            }
            case MusicService.AppleMusic: {
                return AppleMusic.getUserPlaylists();
            }
        }
    }

    static hasService = async (service) => {
        let api;

        switch(service) {
            case MusicService.Spotify: {
                api = new Api("/user/has/spotify");
                break;
            }
            case MusicService.AppleMusic: {
                api = new Api("/user/has/applemusic");
                break;
            }
            case MusicService.Tidal: {
                api = new Api("/user/has/tidal");
                break;
            }
        }

        const res = await api.get();

        return res.data.has;
    }
}

export default UserApi;