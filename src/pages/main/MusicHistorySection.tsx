import SectionTitle from "@/components/SectionTitle";
import SubTitle from '@/components/SubTitle';
import MoreViewBtn from '@/components/Btn/MoreViewBtn';

export default function MusicHistorySection(){
    return(
        <section className="music-history-section">
            <div className="inner">
            <SectionTitle title={`한줄평 남기기`} />
                <SubTitle title={`현재 추천중인 음악에 대한 감상을 공유해주세요.`}/>
                <MoreViewBtn/>
            </div>
        </section>
    );
}