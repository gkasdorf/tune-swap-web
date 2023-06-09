const configure = () => {
    // eslint-disable-next-line no-undef
    MusicKit.configure({
        developerToken: "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjM5M1M0WEYzOFQifQ.eyJpYXQiOjE2Nzk4MTY1NjQsImV4cCI6MTY5NTM2ODU2NCwiaXNzIjoiTTJUNzY1UlJCNCJ9.j8RiEwa8DxkfqOb-iycvJR43G_roWSBohFwiDZYURptbGSlxhmQv2E_g5shN3cGPJI5bTxUNiA1lwrWR4ftClA",
        app: {
            name: "TuneSwap",
            build: ""
        }
    });

    console.log("MusicKit configured.");
};

configure();

// eslint-disable-next-line no-unused-vars
const onButtonClick = () => {
    const button = document.getElementById("apple-music-authorize");
    button.classList.add("disabled");

    const apiToken = localStorage.getItem("token");

    // eslint-disable-next-line no-undef
    let music = MusicKit.getInstance();

    music.authorize().then((token) => {
        window.location.href = "https://api.tuneswap.app/api/applemusic/auth" + "?apiToken=" + encodeURIComponent(apiToken) + "&token=" + encodeURIComponent(token) + "&web=true";
    });
};

setTimeout(() => {
    const authDiv = document.getElementById("authorize");
    authDiv.innerHTML += "<button id='apple-music-authorize' onclick='onButtonClick()' class='py-2 px-4 rounded-md text-md focus:outline-none bg-indigo-500 hover:bg-indigo-700 text-white'>Login with Apple Music</button>";
}, 500);
