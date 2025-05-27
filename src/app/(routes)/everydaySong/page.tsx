import SectionTitle from "@/components/ui/SectionTitle";
import SongHistory from "@/components/EveryDaySong/SongHistory";
import SelectMonthInput from "@/components/EveryDaySong/SelectMonthInput";

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

async function MusicInputAndHistory() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`);
    if(!response.ok){
        alert('오류가 발생하였습니다. 새로고침 부탁드립니다.');
    }
    const result = await response.json();
    const musicData = result.data;

    return (
        <>
            <SelectMonthInput/>
            <SongHistory  music={musicData}/>
        </>
    );
}