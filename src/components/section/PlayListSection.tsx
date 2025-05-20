import SectionTitle from "@/components/ui/SectionTitle";
import SubTitle from "@/components/ui/SubTitle";
import PlayList from "@/components/MusicPlayer/PlayList";

export default function PlayListSection() {
    return (
        <section className="play-list-section section">
            <div className="inner">
                <SectionTitle title={`💽 플레이리스트 추천 💽`} />
                <SubTitle title={`다양한 플레이리스트를 추천해드립니다.`}/>
                <PlayList/>
            </div>
        </section>
    );
}