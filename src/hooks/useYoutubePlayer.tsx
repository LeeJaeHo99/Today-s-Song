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
            Player: new (elementId: string, options: { videoId: string, host: string, playerVars: { origin: string }, events: { onReady: () => void } }) => YouTubePlayer;
        };
        onYouTubeIframeAPIReady: () => void;
    }
}

export function useYoutubePlayer(videoId: string, elementId: string = "youtube-player"){
    const playerRef = useRef<YouTubePlayer | null>(null);

    useEffect(() => {
        if (!videoId) return;

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
                playerVars: {
                    origin: 'https://today-s-song.vercel.app',
                },
                events: {
                    onReady: () => {
                        const iframe = document.getElementById(elementId)?.querySelector('iframe');
                        if (iframe) {
                            iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
                        }
                    },
                },
            });
        };

        loadYouTubeIframeAPI();
    }, [elementId, videoId]);

    return playerRef;
}