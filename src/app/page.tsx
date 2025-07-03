import MusicSection from '@/components/section/MusicSection';
import MusicHistorySection from '@/components/section/MusicHistorySection';
import MusicRecommendSection from '@/components/section/MusicRecommendSection';
import PlayListSection from '@/components/section/PlayListSection';
import ArtistSection from '@/components/section/ArtistSection';
import { isoWeek } from '@/util/getWeekNum';

export default function Home() {
    console.log('isoWeek: ', isoWeek);
    return (
        <div className='main-page'>
            <div className="inner">
                <MusicSection/>
                <MusicRecommendSection/>
                <MusicHistorySection/>
                <ArtistSection/>
                <PlayListSection/>
            </div>
        </div>
    );
}