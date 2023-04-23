import SpotifyApi from "./SpotifyApi";
import AppleMusicApi from "./AppleMusicApi";
import TidalApi from "./TidalApi";
import MusicService from "../../models/MusicService";

class ServicesApi {
    /**
     * Get the user's playlists from the api
     * @param {string} service
     * @returns
     */
    static getUserPlaylists = async (service) => {
        switch(service) {
            case MusicService.Spotify:
                return SpotifyApi.getUserPlaylists();
            case MusicService.AppleMusic:
                return AppleMusicApi.getUserPlaylists();
            case MusicService.Tidal:
                return TidalApi.getUserPlaylists();
        }
    }
}

export default ServicesApi;