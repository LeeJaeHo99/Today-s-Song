import SectionTitle from '@/components/SectionTitle';
import RecommendTable from '@/components/Recommend/RecommendTable';
import SubTitle from '@/components/SubTitle';

export default function RecommendHistorySection(){
    return(
        <section className="recommend-history-section">
            <div className="inner">
                <SectionTitle title={`🎵 노래 신청 리스트 🎵`}/>
                <SubTitle title={`현재까지 신청된 음악을 확인 할 수 있습니다.`}/>
                <RecommendTable/>
            </div>
        </section>
    );
}