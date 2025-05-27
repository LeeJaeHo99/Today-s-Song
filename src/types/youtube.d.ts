declare namespace YT {
    interface Player {
        getPlayerState(): number;
        playVideo(): void;
        pauseVideo(): void;
    }

    const PlayerState: {
        UNSTARTED: -1;
        ENDED: 0;
        PLAYING: 1;
        PAUSED: 2;
        BUFFERING: 3;
        CUED: 5;
    };

    interface PlayerConstructor {
        new (elementId: string, options: { videoId: string }): Player;
    }
}

declare global {
    interface Window {
        YT: {
            Player: YT.PlayerConstructor;
            PlayerState: typeof YT.PlayerState;
        };
    }
}
