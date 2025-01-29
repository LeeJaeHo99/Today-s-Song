import SectionTitle from "@/components/SectionTitle";
import SubTitle from "@/components/SubTitle";
import MusicRecommend from '@/components/Recommend/MusicRecommend';

export default function MusicRecommendSection() {
    return (
        <section className="music-recommend-section">
            <div className="inner">
                <SectionTitle title={`노래 신청하기`} />
                <SubTitle title={`자신의 플레이리스트에 있는 최애곡을 추천해 주세요.`}/>
                <MusicRecommend/>
            </div>
        </section>
    );
}