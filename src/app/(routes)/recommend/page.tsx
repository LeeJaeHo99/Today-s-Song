import SectionTitle from "@/components/SectionTitle";
import MusicRecommend from '@/components/Recommend/MusicRecommend';

export default function RecommendPage(){
    return(
        <div className="recommend-page sub-page--wrap">
            <div className="inner">
            <SectionTitle title={'노래신청'}/>
                <MusicRecommend/>
            </div>
        </div>
    );
}