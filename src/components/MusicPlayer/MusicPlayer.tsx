"use client";

import { useYoutubePlayer } from "@/hooks/useYoutubePlayer";
import MusicThumbnail from "./MusicThumnail";
import { useState } from "react";

export default function MusicPlayer() {
    const videoId = "fuz2F8GGQKI";
    const playerRef = useYoutubePlayer(videoId);
    const [isPlaying, setIsPlaying] = useState(false);

    const clickPlayer = () => {
        if (!playerRef.current || typeof playerRef.current.getPlayerState !== "function") {
            console.warn("YouTube Player is not ready yet!");
            return;
        }

        const playerState = playerRef.current.getPlayerState();

        if (playerState === window.YT.PlayerState.PLAYING) {
            playerRef.current.pauseVideo();
            setIsPlaying(false);
        } else {
            playerRef.current.playVideo();
            setIsPlaying(true);
        }
    };

    return (
        <>
            <div id="youtube-player" className="music-player"></div>
            <div className="music-plauer--wrap">
                <button className={`play-btn ${isPlaying ? `play` : `pause`}`} onClick={clickPlayer}></button>
                <MusicThumbnail videoId={videoId} isPlaying={isPlaying}/>
            </div>
        </>
    );
}
