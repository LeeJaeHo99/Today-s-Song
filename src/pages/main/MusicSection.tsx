"use client";

import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import SectionTitle from "@/components/SectionTitle";
import MusicDesc from "@/components/MusicPlayer/MusicDesc";

export default function MusicSection() {
    return (
        <section className="music-section">
            <div className="inner">
                <div className="music-info">
                    <SectionTitle title={`𝑇𝑜𝑑𝑎𝑦'𝑠 𝑆𝑜𝑛𝑔`} />
                    <div className="player-wrap">
                        <MusicPlayer />
                        <MusicDesc />
                    </div>
                </div>
            </div>
        </section>
    );
}
