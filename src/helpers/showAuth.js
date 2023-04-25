import MusicService from "../models/MusicService";

export const showAuth = (service) => {
    let url = null;

    switch(service) {
    case MusicService.Spotify: {
        url = "/app/user/auth/spotify";
    }
    }

    setTimeout(() => {
        window.open(url);
    }, 100);
};