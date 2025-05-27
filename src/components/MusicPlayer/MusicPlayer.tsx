"use client";

import { useYoutubePlayer } from "@/hooks/useYoutubePlayer";
import MusicThumbnail from "./MusicThumnail";
import { useState } from "react";
import { motion } from "motion/react";

export default function MusicPlayer() {
    const videoId = "H2ncCtw2YxA";
    const playerRef = useYoutubePlayer(videoId);
    const [isPlaying, setIsPlaying] = useState(false);

    const clickPlayer = () => {
        if (
            !playerRef.current ||
            typeof playerRef.current.getPlayerState !== "function"
        ) {
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
        <motion.div
            className="music-player--wrap"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            <button
                className={`play-btn ${isPlaying ? `play` : `pause`}`}
                onClick={clickPlayer}
            ></button>
            <MusicThumbnail videoId={videoId} isPlaying={isPlaying} />
        </motion.div>
    );
}
