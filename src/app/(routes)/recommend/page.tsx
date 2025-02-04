import SectionTitle from "@/components/SectionTitle";
import SubTitle from '@/components/SubTitle';
import MusicRecommend from '@/components/Recommend/MusicRecommend';
import RecommendTable from "@/components/Recommend/RecommendTable";

export default function RecommendPage(){
    return(
        <div className="recommend-page sub-page--wrap">
            <div className="inner">
            <SectionTitle title={'노래신청'}/>
                <MusicRecommend/>
                <div className="recommend-list--wrap">
                    <SectionTitle title={'🎶 신청리스트 🎶'}/>
                    <SubTitle title={'현재까지 신청된 노래를 소개해드립니다.'}/>
                    <RecommendTable/>
                </div>
            </div>
        </div>
    );
}