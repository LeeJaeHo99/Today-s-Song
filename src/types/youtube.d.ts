declare namespace YT {
    interface Player {
        getPlayerState(): number;
        playVideo(): void;
        pauseVideo(): void;
        destroy(): void;
    }

    const PlayerState: {
        UNSTARTED: -1;
        ENDED: 0;
        PLAYING: 1;
        PAUSED: 2;
        BUFFERING: 3;
        CUED: 5;
    };

    interface PlayerVars {
        autoplay?: 0 | 1;
        modestbranding?: 0 | 1;
        rel?: 0 | 1;
        origin?: string;
        [key: string]: string | number | boolean | undefined;
    }

    interface PlayerConstructor {
        new (
            elementId: string, 
            options: { 
                videoId: string;
                host?: string;
                playerVars?: PlayerVars;
                events?: {
                    onReady?: () => void;
                };
            }
        ): Player;
    }
}

declare global {
    interface Window {
        YT: {
            Player: YT.PlayerConstructor;
            PlayerState: typeof YT.PlayerState;
        };
        onYouTubeIframeAPIReady: () => void;
    }
}
