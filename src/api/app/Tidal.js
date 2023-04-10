import Api from "../Api";

class Tidal {
    static getUserPlaylists = async () => {
        const api = new Api("/tidal/me/playlists");

        const resp = await api.get();

        let playlists = [];

        resp.data.items.forEach(playlist => {
            const obj = {
                id: playlist.data.uuid,
                name: playlist.data.title,
                image: "/TidalIcon.png"
            }

            playlists.push(obj);
        });

        return playlists;
    }
}

export default Tidal;