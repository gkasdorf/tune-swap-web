import Api from "../Api";

class Spotify {
    static getAuthUrl = () => {
        const api = new Api("/spotify/authUrl");

        const url = process.env.REACT_APP_SPOTIFY_REDIRECT_URL;

        console.log(url);

        const data = {
            redirect_url: url
        };

        return api.get(data);
    }

    static doAuth = (code) => {
        const api = new Api("/spotify/auth");
        const redirectUrl = process.env.REACT_APP_SPOTIFY_REDIRECT_URL;

        const data = {
            code: code,
            redirect_url: redirectUrl
        };

        return api.get(data);
    }

    static getUserPlaylists = async () => {
        const api = new Api("/spotify/me/playlists");

        const resp = await api.get();

        let playlists = [];

        resp.data.items.forEach(playlist => {
            const obj = {
                id: playlist.id,
                name: playlist.name,
                image: playlist.images[2] ? playlist.images[2].url : playlist.images[0].url
            };

            playlists.push(obj);
        });

        return playlists;
    }
}

export default Spotify;