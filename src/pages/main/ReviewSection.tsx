import SectionTitle from "@/components/SectionTitle";
import SubTitle from '@/components/SubTitle';
import MoreViewBtn from '@/components/Btn/MoreViewBtn';
import Review from '@/components/Review/Review';
import SetReview from '@/components/Review/SetReview';

export default function ReviewSection(){
    return(
        <section className="review-section">
            <div className="inner">
                <SectionTitle title={`✏️ 한줄평 남기기 ✏️`} />
                <SubTitle title={`현재 추천중인 음악에 대한 감상을 공유해주세요.`}/>
                <MoreViewBtn link={''}/>
                <div className="review-wrap">
                    <Review/>
                    <Review/>
                    <Review/>
                </div>
                <SetReview/>
            </div>
        </section>
    );
}