"use client";

import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import MusicDesc from "@/components/MusicPlayer/MusicDesc";
import MusicBtn from '@/components/MusicPlayer/MusicBtn';

export default function MusicSection() {
    return (
        <section className="music-section">
            <div className="inner">
                <div className="music-info">
                    <MusicBtn/>
                <div id="youtube-player" className="music-player"></div>
                    <div className="player-wrap">
                        <MusicPlayer />
                        <MusicDesc />
                    </div>
                </div>
            </div>
        </section>
    );
}
