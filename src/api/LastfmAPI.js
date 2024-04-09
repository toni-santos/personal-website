import { randInt } from "three/src/math/MathUtils";


export async function getRecentTracks() {
    const API_KEY = import.meta.env.VITE_LAST_FM_API_KEY
    const url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=n4gi7o&api_key=" + API_KEY + "&format=json";
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            return data.recenttracks.track[randInt(0, data.recenttracks.track.length - 10)];
        });
}
