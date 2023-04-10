import MusicService from "./MusicService";

const MusicServiceIcon = (service) => {
    switch(service) {
        case MusicService.Spotify: {
            return "/SpotifyIcon.svg";
        }
        case MusicService.AppleMusic: {
            return "/AppleMusicIcon.svg";
        }
        case MusicService.Tidal: {
            return "/TidalIcon.png"
        }
        default: {
            return "/PlaceholderIcon.svg";
        }
    }
}

export default MusicServiceIcon;