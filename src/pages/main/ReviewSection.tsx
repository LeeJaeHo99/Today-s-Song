import SectionTitle from "@/components/SectionTitle";
import SubTitle from '@/components/SubTitle';
import MoreViewBtn from '@/components/Btn/MoreViewBtn';
import Review from '@/components/Review/Review';
import SetReview from '@/components/Review/SetReview';

export default async function ReviewSection(){
    let result = {success: false, data: []};
    console.log('result: ', result);

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`, {
            next: {revalidate: 60},
        });
        
        if(!response.ok){
            alert('새로고침 부탁드립니다.');
        }
        result = await response.json();
    }
    catch(error){
        console.error('Failed to fetch today’s song:', error);
    }

    return(
        <section className="review-section">
            <div className="inner">
                <SectionTitle title={`✏️ 한줄평 남기기 ✏️`} />
                <SubTitle title={`현재 추천중인 음악에 대한 감상을 공유해주세요.`}/>
                <MoreViewBtn link={''}/>
                {/* <div className="review-wrap">
                    {reviewInfo.map((review, i) => <Review key={review.userName} musicInfo={musicInfo}/>)}
                </div> */}
                <SetReview/>
            </div>
        </section>
    );
}