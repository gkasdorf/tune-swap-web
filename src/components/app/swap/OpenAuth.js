import MusicService from "../../../models/MusicService";
import Spotify from "../../../api/app/Spotify";

const OpenAuth = async (service) => {
    if(service === MusicService.Spotify) {
        const spotifyUrlRes = await Spotify.getAuthUrl();

        // Run on main thread so Safari doesn't block
        setTimeout(() => { window.open(spotifyUrlRes.data.url) });
    } else if(service === MusicService.AppleMusic) {
        setTimeout(() => { window.open("/app/applemusic/auth")});
    }
}

export default OpenAuth;