import SectionTitle from "@/components/SectionTitle";
import SubTitle from '@/components/SubTitle';
import MoreViewBtn from '@/components/Btn/MoreViewBtn';
import Review from '@/components/Review/Review';
import SetReview from '@/components/Review/SetReview';

export default async function ReviewSection(){
    let result = {success: false, data: []};

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getTodaySong`,{
            cache: 'no-store',
        });
        
        if(!response.ok){
            console.log('새로고침');
        }
        result = await response.json();
    }
    catch(error){
        console.error('Failed to fetch today’s song:', error);
    }
    let reviewData = result.data[0].morning.review;
    console.log('reviewData: ', reviewData);

    return(
        <section className="review-section">
            <div className="inner">
                <SectionTitle title={`✏️ 한줄평 남기기 ✏️`} />
                <SubTitle title={`현재 추천중인 음악에 대한 감상을 공유해주세요.`}/>
                <MoreViewBtn link={''}/>
                <div className="review-wrap">
                    {/* {
                        reviewData.map((review, i) => {
                            <Review review={review}/>
                        })
                    } */}
                    <Review/>
                    <Review/>
                </div>
                <SetReview/>
            </div>
        </section>
    );
}