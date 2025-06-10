'use client';

import { useEffect, useRef } from "react";

interface YouTubePlayer {
    playVideo: () => void;
    pauseVideo: () => void;
    stopVideo: () => void;
    seekTo: (seconds: number) => void;
    getPlayerState: () => number;
    getCurrentTime: () => number;
    getDuration: () => number;
}

declare global {
    interface Window {
        YT: {
            Player: new (elementId: string, options: { videoId: string, host: string }) => YouTubePlayer;
        };
        onYouTubeIframeAPIReady: () => void;
    }
}

export function useYoutubePlayer(videoId: string, elementId: string = "youtube-player"){
    const playerRef = useRef<YouTubePlayer | null>(null);

    useEffect(() => {
        const loadYouTubeIframeAPI = () => {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        };

        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player(elementId, {
                videoId: videoId,
                host: 'https://www.youtube.com',
            });
        };

        loadYouTubeIframeAPI();
    }, [elementId, videoId]);

    return playerRef;
}