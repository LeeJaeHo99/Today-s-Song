import SectionTitle from "@/components/ui/SectionTitle";
import MusicInputAndHistory from "@/components/EveryDaySong/MusicInputAndHistory";

export default function everydaySongPage() {
    return (
        <div className="everyday-song-page sub-page--wrap">
            <div className="inner">
                <SectionTitle title={"매일노래"} />
                <MusicInputAndHistory/>
            </div>
        </div>
    );
}

