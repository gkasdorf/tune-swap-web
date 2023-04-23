import Api from "../Api";

class SpotifyApi {
    static getAuthUrl = () => {
        const api = new Api("/spotify/authUrl");

        const url = process.env.REACT_APP_SPOTIFY_REDIRECT_URL;

        const data = {
            redirect_uri: url
        };

        return api.get(data);
    }

    static doAuth = (code) => {
        const api = new Api("/spotify/auth");
        const redirectUrl = process.env.REACT_APP_SPOTIFY_REDIRECT_URL;

        const data = {
            code: code,
            redirect_uri: redirectUrl
        };

        return api.get(data);
    }

    static getUserPlaylists = () => {
        const api = new Api("/v2/spotify/me/playlists");

        return api.get();
    }
}

export default SpotifyApi;