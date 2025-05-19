import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import MusicDesc from "@/components/MusicPlayer/MusicDesc";
import CommentAndTime from "@/components/ui/CommentAndTime";
import Lyric from "@/components/ui/Lyric";

export default function MusicSection() {
    return (
        <section className="music-section">
            <video 
                className="background-video"
                autoPlay 
                muted 
                loop 
                playsInline
            >
                <source src="/videos/main-bg.mp4" type="video/mp4" />
            </video>
            <div className="inner">
                <div className="music-info blur-box">
                    <div className="player-wrap">
                        <MusicPlayer />
                        <MusicDesc />
                    </div>
                    <div id="youtube-player" className="music-player"></div>
                </div>
                <div className="music-section--right side-content">
                    <Lyric />
                    <CommentAndTime />
                </div>
            </div>
        </section>
    );
}

