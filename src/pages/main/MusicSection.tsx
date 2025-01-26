import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import SectionTitle from "@/components/SectionTitle";
import MusicDesc from "@/components/MusicPlayer/MusicDesc";

export default function MusicSection() {
    return (
        <section className="music-section">
            <div className="inner">
                <SectionTitle title={"오늘의 노래"} />
                <div className="player-wrap">
                    <MusicPlayer />
                    <MusicDesc />
                </div>
            </div>
        </section>
    );
}
