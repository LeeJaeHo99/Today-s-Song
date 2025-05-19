import MusicSection from '@/pages/main/MusicSection';
import ReviewSection from '@/pages/main/ReviewSection';
import MusicHistorySection from '@/pages/main/MusicHistorySection';
import MusicRecommendSection from '@/pages/main/MusicRecommendSection';
import RecommendHistorySection from '@/pages/main/RecommendHistorySection';

export default function Home() {
    return (
        <div className='main-page'>
            <div className="inner">
                <MusicSection/>
                <ReviewSection/>
                <MusicHistorySection/>
                <MusicRecommendSection/>
                <RecommendHistorySection/>
            </div>
        </div>
    );
}