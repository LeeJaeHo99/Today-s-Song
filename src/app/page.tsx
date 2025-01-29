import MainBg from '@/components/MainBg';
import MusicSection from '@/pages/main/MusicSection';
import ReviewSection from '@/pages/main/ReviewSection';
import MusicHistorySection from '@/pages/main/MusicHistorySection';
import MusicRecommendSection from '@/pages/main/MusicRecommendSection';

export default function Home() {
    return (
        <div className='main-page'>
            <MainBg/>
            <div className="inner">
                <MusicSection/>
                <ReviewSection/>
                <MusicHistorySection/>
                <MusicRecommendSection/>
            </div>
        </div>
    );
}