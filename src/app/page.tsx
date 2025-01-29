import MainBg from '@/components/MainBg';
import MusicSection from '@/pages/main/MusicSection';
import ReviewSection from '@/pages/main/ReviewSection';

export default function Home() {
    return (
        <div className='main-page'>
            <MainBg/>
            <div className="inner">
                <MusicSection/>
                <ReviewSection/>
            </div>
        </div>
    );
}