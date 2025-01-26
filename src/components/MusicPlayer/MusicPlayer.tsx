"use client";

import { useYoutubePlayer } from "@/hooks/useYoutubePlayer";
import MusicThumbnail from "./MusicThumnail";

export default function MusicPlayer() {
    const videoId = "fuz2F8GGQKI";
    const playerRef = useYoutubePlayer(videoId);

    const clickPlayer = () => {
        if (playerRef.current) {
            playerRef.current.playVideo();
        }
    };

    return (
        <div>
            <div id="youtube-player" className="music-player"></div>
            <button onClick={clickPlayer}>123</button>
            <MusicThumbnail videoId={videoId}/>
        </div>
    );
}
