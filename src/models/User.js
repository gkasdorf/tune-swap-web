import MusicService from "./MusicService";

class User {
    name;
    email;
    apiToken;
    spotify = false;
    spotifyEmail = null;
    appleMusic = false;

    /**
     * User constructor
     * @param params {{name: string, email: string, apiToken: string}}
     */
    constructor(params) {
        params && Object.assign(this, params);
    }

    /**
     * Get the user's name
     * @returns {string}
     */
    getName = () => {
        return this.name;
    }

    /**
     * Get the user's email
     * @returns {string}
     */
    getEmail = () => {
        return this.email;
    }

    /**
     * Get the user's API token
     * @returns {string}
     */
    getApiToken = () => {
        return this.apiToken;
    }

    /**
     * Check if a user has a music service
     * @param service {MusicService}
     * @returns {boolean}
     */
    hasService = (service) => {
        if(service === MusicService.AppleMusic) {
            return this.appleMusic;
        }

        if(service === MusicService.Spotify) {
            return this.spotify;
        }
    }

    /**
     * Get the user's spotify email
     * @returns {string|null}
     */
    getSpotifyEmail = () => {
        return this.spotifyEmail;
    }

    /**
     * Stores the user in localStorage
     * @returns {Promise<void>}
     */
    store = async () => {
        await localStorage.setItem("user", JSON.stringify(this));
    }

    /**
     * Loads a user from local storage
     * @returns {User|null}
     */
    static load = () => {
        const lsItem = localStorage.getItem("user");

        if(!lsItem) return null;

        return new User(JSON.parse(lsItem));
    }

    /**
     * Clears the user from local storage
     * @returns {Promise<void>}
     */
    static clear = async () => {
        await localStorage.setItem("user", null);
    }

    static isSet = () => {
        return localStorage.getItem("user") !== null && localStorage.getItem("user") !== "null";
    }
}

export default User;