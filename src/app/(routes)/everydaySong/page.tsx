import SectionTitle from "@/components/SectionTitle";
import SongHistory from "@/components/EveryDaySong/SongHistory";

export default function everydaySongPage(){
    return(
        <div className="everyday-song-page sub-page--wrap">
            <div className="inner">
                <SectionTitle title={'매일노래'}/>
                <SongHistory/>
            </div>
        </div>
    );
}