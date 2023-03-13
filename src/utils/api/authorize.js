export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "ac3ee6f017b54a0d8e1e7935083cc0da";
const redirectUri = "https://beemusicdaniel.netlify.app/";
const scopes = ["user-read-currently-playing", "user-read-playback-state", "user-library-read"];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`
export const baserUrl = "https://api.spotify.com/v1";