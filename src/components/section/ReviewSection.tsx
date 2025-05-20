import SectionTitle from "@/components/ui/SectionTitle";
import SetReview from "@/components/Review/SetReview";

export default async function ReviewSection() {
    return (
        <section className="form-section section">
            <div className="inner">
                <div>
                    <SectionTitle title={`한줄평 남기기`} />
                    <SetReview />
                </div>
                <div>123</div>
            </div>
        </section>
    );
}