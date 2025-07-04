'use client';

import { useEffect, useRef, useState } from "react";

interface YouTubePlayer {
    playVideo: () => void;
    pauseVideo: () => void;
    stopVideo: () => void;
    seekTo: (seconds: number) => void;
    getPlayerState: () => number;
    getCurrentTime: () => number;
    getDuration: () => number;
    destroy: () => void;
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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!videoId) return;

        const loadYouTubeIframeAPI = () => {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            tag.async = true;
            tag.defer = true;
            const firstScriptTag = document.getElementsByTagName("script")[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
        };

        window.onYouTubeIframeAPIReady = () => {
            setIsLoading(false);
            playerRef.current = new window.YT.Player(elementId, {
                videoId: videoId,
                host: 'https://www.youtube.com',
                playerVars: {
                    origin: 'https://www.todayssong.co.kr',
                },
                events: {
                    onReady: () => {
                        const iframe = document.getElementById(elementId)?.querySelector('iframe');
                        if (iframe) {
                            iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
                            iframe.setAttribute('loading', 'lazy');
                        }
                    },
                },
            });
        };

        loadYouTubeIframeAPI();

        return () => {
            if (playerRef.current) {
                playerRef.current.destroy();
            }
        };
    }, [elementId, videoId]);

    return { playerRef, isLoading };
}