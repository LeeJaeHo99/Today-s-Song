'use client';

import { useEffect, useRef } from 'react';

interface YouTubePlayerProps {
    videoId: string;
    onReady?: () => void;
}

export default function YouTubePlayer({ videoId, onReady }: YouTubePlayerProps) {
    const playerRef = useRef<YT.Player | null>(null);

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
            playerRef.current = new window.YT.Player("youtube-player", {
                videoId: videoId,
                host: 'https://www.youtube.com',
                playerVars: {
                    origin: 'https://www.todayssong.co.kr',
                },
                events: {
                    onReady: () => {
                        const iframe = document.getElementById("youtube-player")?.querySelector('iframe');
                        if (iframe) {
                            iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
                            iframe.setAttribute('loading', 'lazy');
                        }
                        onReady?.();
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
    }, [videoId, onReady]);

    return null;
} 