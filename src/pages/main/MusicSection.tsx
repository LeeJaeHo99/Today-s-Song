import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import SectionTitle from "@/components/SectionTitle";
import MusicDesc from "@/components/MusicPlayer/MusicDesc";

export default function MusicSection() {
    return (
        <section className="music-section">
            <div className="inner">
                <MusicPlayer />
                <div>
                    <SectionTitle title={"오늘의 노래"} />
                    <MusicDesc />
                </div>
            </div>
        </section>
    );
}
