import SectionTitle from "@/components/SectionTitle";
import SubTitle from "@/components/SubTitle";
import MoreViewBtn from "@/components/Btn/MoreViewBtn";
import MusicHistory from '@/components/History/MusicHistory';

export default async function MusicHistorySection() {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`);
    let result = await response.json();
    let yesterdayMusicData = result.data[1];
    console.log('yesterdayMusicData: ', yesterdayMusicData);


    return (
        <section className="music-history-section">
            <div className="inner">
                <SectionTitle title={`🎧 어제의 노래 🎧`} />
                <SubTitle title={`지금까지 추천된 음악을 확인 할 수 있습니다.`}/>
                <MoreViewBtn link={'everydaySong'}/>
                <div className="music-history--wrap">
                    <MusicHistory time={'☀️'} musicData={yesterdayMusicData.morning}/>
                    <MusicHistory time={'🌙'} musicData={yesterdayMusicData.night}/>
                </div>
            </div>
        </section>
    );
}