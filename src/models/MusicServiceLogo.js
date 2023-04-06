import MusicService from "./MusicService";

const MusicServiceLogo = (service) => {
    switch(service) {
        case MusicService.Spotify: {
            return "/SpotifyLogo.png";
        }
        case MusicService.AppleMusic: {
            return "/AppleMusicLogo.png";
        }
        default: {
            return "/PlaceholderIcon.svg";
        }
    }
}

export default MusicServiceLogo;