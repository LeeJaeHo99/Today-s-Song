import MusicSection from '@/pages/main/MusicSection';
import MainBg from '@/components/MainBg';

export default function Home() {
    return (
        <div className='main-page'>
            <MainBg/>
            <div className="inner">
                <MusicSection/>
            </div>
        </div>
    );
}