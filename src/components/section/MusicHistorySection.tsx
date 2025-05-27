import SectionTitle from "@/components/ui/SectionTitle";
import SubTitle from "@/components/ui/SubTitle";
import MoreViewBtn from "@/components/ui/MoreViewBtn";
import MusicHistory from '@/components/ui/MusicHistory';

export default async function MusicHistorySection() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`);
    const result = await response.json();
    const yesterdayMusicData = result.data[1];


    return (
        <section className="music-history-section section">
            <div className="inner">
                <SectionTitle title={`🎧 어제의 노래 🎧`} />
                <SubTitle title={`어제 추천된 음악을 확인 할 수 있습니다.`}/>
                <MoreViewBtn link={'everydaySong'}/>
                <div className="music-history--wrap">
                    <MusicHistory time={'☀️'} musicData={yesterdayMusicData.morning}/>
                    <MusicHistory time={'🌙'} musicData={yesterdayMusicData.night}/>
                </div>
            </div>
        </section>
    );
}