'use client';

import { useEffect, useRef } from "react";

export function useYoutubePlayer(videoId: string, elementId: string = "youtube-player"){
    const playerRef = useRef(null);

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
            });
        };

        loadYouTubeIframeAPI();
    }, [videoId]);

    return playerRef;
}