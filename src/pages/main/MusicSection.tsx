"use client";

import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import MusicDesc from "@/components/MusicPlayer/MusicDesc";
import { useState, useEffect } from "react";

export default function MusicSection() {
    const [isMorning, setIsMorning] = useState(false);

    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();
        setIsMorning(hours >= 6 && hours < 18);
    }, []);

    return (
        <section className="music-section">
            <div className="inner">
                <div className="music-info blur-box">
                    <div className="player-wrap">
                        <p>{isMorning ? "☀️" : "🌙"}</p>
                        <MusicPlayer />
                        <MusicDesc />
                    </div>
                <div id="youtube-player" className="music-player"></div>
                </div>
            </div>
        </section>
    );
}