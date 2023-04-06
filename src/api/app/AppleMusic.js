import Api from "../Api";

class AppleMusic {
    static getUserPlaylists = async () => {
        const api = new Api("/applemusic/me/playlists");

        const resp = await api.get();

        let playlists = [];

        resp.data.data.forEach(playlist => {
            const obj = {
                id: playlist.id,
                name: playlist.attributes.name,
                image: "/AppleMusicIcon.svg"
            };

            playlists.push(obj);
        });

        return playlists;
    }
}

export default AppleMusic;