import SectionTitle from "@/components/SectionTitle";
import SubTitle from "@/components/SubTitle";
import MoreViewBtn from "@/components/Btn/MoreViewBtn";
import MusicHistory from '@/components/History/MusicHistory';

export default function MusicHistorySection() {
    return (
        <section className="music-history-section">
            <div className="inner">
                <SectionTitle title={`🎧 어제의 노래 🎧`} />
                <SubTitle title={`지금까지 추천된 음악을 확인 할 수 있습니다.`}/>
                <MoreViewBtn />
                <div className="music-history--wrap">
                    <MusicHistory time={'☀️'}/>
                    <MusicHistory time={'🌙'}/>
                </div>
            </div>
        </section>
    );
}