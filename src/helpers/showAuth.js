import MusicService from "../models/MusicService";

export const showAuth = (service, setTidalModalVisible) => {
    let url = null;

    switch(service) {
    case MusicService.Spotify: {
        url = "/app/user/auth/spotify";
        break;
    }
    case MusicService.AppleMusic: {
        url = "/app/user/auth/applemusic";
        break;
    }
    case MusicService.Tidal: {
        setTidalModalVisible(true);
        return;
    }
    }

    setTimeout(() => {
        window.open(url);
    }, 100);
};