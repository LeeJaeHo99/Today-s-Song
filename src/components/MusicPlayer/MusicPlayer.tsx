"use client";

import { useYoutubePlayer } from "@/hooks/useYoutubePlayer";
import MusicThumbnail from "./MusicThumnail";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Spinner from "../spinner/Spinner";

export default function MusicPlayer() {
    const [isLoading, setIsLoading] = useState(true);
    const [videoId, setVideoId] = useState<string>("");
    const [isMorning, setIsMorning] = useState<string>("morning");

    const playerRef = useYoutubePlayer(videoId);
    const [isPlaying, setIsPlaying] = useState(false);

    const getTime = () => {
        const now = new Date();
        const hours = now.getHours();
        setIsMorning(hours < 18 && hours > 6 ? "morning" : "night");
    };

    useEffect(() => {
        getTime();
        const fetchData = async () => {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`
            );
            const result = await response.json();
            setVideoId(
                `${result.data[result.data.length - 1][isMorning].videoId}`
            );
            setIsLoading(false);
        };
        fetchData();
    }, [isMorning]);

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
        <>
            {isLoading && <Spinner />}
            {!isLoading && (
                <motion.div
                    className="music-player--wrap"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                        delay: 0.5,
                    }}
                >
                    <button
                        className={`play-btn ${isPlaying ? `play` : `pause`}`}
                        onClick={clickPlayer}
                    ></button>
                    <MusicThumbnail videoId={videoId} isPlaying={isPlaying} />
                </motion.div>
            )}
        </>
    );
}