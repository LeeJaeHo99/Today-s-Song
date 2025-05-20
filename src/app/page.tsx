import MusicSection from '@/components/section/MusicSection';
import ReviewSection from '@/components/section/ReviewSection';
import MusicHistorySection from '@/components/section/MusicHistorySection';
import MusicRecommendSection from '@/components/section/MusicRecommendSection';
import PlayListSection from '@/components/section/PlayListSection';

export default function Home() {
    return (
        <div className='main-page'>
            <div className="inner">
                <MusicSection/>
                <ReviewSection/>
                <MusicHistorySection/>
                <MusicRecommendSection/>
                <PlayListSection/>
            </div>
        </div>
    );
}