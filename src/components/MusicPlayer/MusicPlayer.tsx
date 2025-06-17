"use client";

import { useYoutubePlayer } from "@/hooks/useYoutubePlayer";
import MusicThumbnail from "./MusicThumnail";
import YouTubePlaceholder from "./YouTubePlaceholder";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Spinner from "../spinner/Spinner";

export default function MusicPlayer() {
    const [isLoading, setIsLoading] = useState(true);
    const [videoId, setVideoId] = useState<string>("");
    const [isMorning, setIsMorning] = useState<string>("");
    const [shouldLoadPlayer, setShouldLoadPlayer] = useState(false);

    const { playerRef, isLoading: isPlayerLoading } = useYoutubePlayer(
        shouldLoadPlayer ? videoId : "",
        "youtube-player"
    );
    const [isPlaying, setIsPlaying] = useState(false);

    const getTime = () => {
        const now = new Date();
        const hours = now.getHours();
        setIsMorning(hours < 18 && hours > 6 ? "morning" : "night");
    };

    useEffect(() => {
        getTime();
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`
                );
                const result = await response.json();

                setVideoId(`${result.data[result.data.length - 1][isMorning]?.videoId}`);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching music data:", error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [isMorning]);

    const handlePlayClick = () => {
        if (!shouldLoadPlayer) {
            setShouldLoadPlayer(true);
            setTimeout(() => {
                if (playerRef.current) {
                    playerRef.current?.playVideo();
                    setIsPlaying(true);
                }
            }, 1000);
        } else {
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
        }
    };

    if (isLoading || (shouldLoadPlayer && isPlayerLoading)) {
        return <Spinner />;
    }

    return (
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
            {shouldLoadPlayer ? (
                <>
                    <button
                        className={`play-btn ${isPlaying ? `play` : `pause`}`}
                        onClick={handlePlayClick}
                        aria-label={isPlaying ? "일시정지" : "재생"}
                    ></button>
                    <MusicThumbnail videoId={videoId} isPlaying={isPlaying} />
                    <div id="youtube-player" className="music-player" style={{ display: 'none' }}></div>
                </>
            ) : (
                <YouTubePlaceholder
                    videoId={videoId}
                    onClick={handlePlayClick}
                    isPlaying={isPlaying}
                />
            )}
        </motion.div>
    );
}