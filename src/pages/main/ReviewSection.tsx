import SectionTitle from "@/components/SectionTitle";
import SubTitle from "@/components/SubTitle";
import MoreViewBtn from "@/components/Btn/MoreViewBtn";
import Review from "@/components/Review/Review";
import SetReview from "@/components/Review/SetReview";

interface ReviewType {
    [key: string]: string;
}

export default async function ReviewSection() {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/getReview`
    );
    const result = await response.json();
    const reviewData = result.data;
    const lastThrReview =
        reviewData.length >= 3
            ? reviewData.slice(reviewData.length - 3).reverse()
            : reviewData;

    return (
        <section className="review-section">
            <div className="inner">
                <SectionTitle title={`✏️ 한줄평 남기기 ✏️`} />
                <SubTitle
                    title={`현재 추천중인 음악에 대한 감상을 공유해주세요.`}
                />
                {lastThrReview.length >= 3 && <MoreViewBtn link={""} />}
                <div className="review-wrap">
                    {lastThrReview.map((review: ReviewType) => (
                        <Review key={review._id} reviewInfo={review} />
                    ))}
                </div>
                <SetReview />
            </div>
        </section>
    );
}
