import SectionTitle from "@/components/ui/SectionTitle";
import SubTitle from "@/components/ui/SubTitle";
import MoreViewBtn from "@/components/ui/MoreViewBtn";
import MusicHistory from '@/components/ui/MusicHistory';

export default async function MusicHistorySection() {
    let yesterdayMusicData = null;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        yesterdayMusicData = result.data.reverse()[result.data.length - 2];
    } catch (error) {
        console.error("음악 데이터를 가져오는 중 오류 발생:", error);
        return (
            <section className="music-history-section section">
                <div className="inner">
                    <SectionTitle title="🎧 어제의 노래 🎧" />
                    <SubTitle title="어제 추천된 음악을 확인 할 수 있습니다." />
                    <p className="text-red-500 mt-4">데이터를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.</p>
                </div>
            </section>
        );
    }

    return (
        <section className="music-history-section section">
            <div className="inner">
                <SectionTitle title={`🎧 어제의 노래 🎧`} />
                <SubTitle title={`어제 추천된 음악을 확인 할 수 있습니다.`}/>
                <MoreViewBtn link={'everydaySong'}/>
                <div className="music-history--wrap">
                    <MusicHistory time={'☀️'} musicData={yesterdayMusicData?.morning}/>
                    <MusicHistory time={'🌙'} musicData={yesterdayMusicData?.night}/>
                </div>
            </div>
        </section>
    );
}