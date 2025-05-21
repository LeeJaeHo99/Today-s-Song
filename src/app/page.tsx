import MusicSection from '@/components/section/MusicSection';
import MusicHistorySection from '@/components/section/MusicHistorySection';
import MusicRecommendSection from '@/components/section/MusicRecommendSection';
import PlayListSection from '@/components/section/PlayListSection';
import DataSection from '@/components/section/DataSection';

export default function Home() {
    return (
        <div className='main-page'>
            <div className="inner">
                <MusicSection/>
                <MusicRecommendSection/>
                <MusicHistorySection/>
                <PlayListSection/>
                <DataSection/>
            </div>
        </div>
    );
}