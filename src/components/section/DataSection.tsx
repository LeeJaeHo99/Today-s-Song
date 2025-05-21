import SectionTitle from "../ui/SectionTitle";
import MoreViewBtn from "../ui/MoreViewBtn";
import TitleContent from "../ui/TitleContent";

export default function DataSection() {
    return (
        <section className="data-section section">
            <div className="inner">
                <div className="notice-section">
                    <div>
                        <SectionTitle title="공지사항" />
                        <MoreViewBtn link="notice" />
                    </div>
                    <div className="preview-box blur-box">
                        <div className="title-wrap">
                            <TitleContent _id="1" title="test" date="2021-01-01" />
                            <TitleContent _id="1" title="test" date="2021-01-01" />
                            <TitleContent _id="1" title="test" date="2021-01-01" />
                            <TitleContent _id="1" title="test" date="2021-01-01" />
                            <TitleContent _id="1" title="test" date="2021-01-01" />
                        </div>
                    </div>
                </div>
                <div className="board-section">
                    <div>
                        <SectionTitle title="자유게시판" />
                        <MoreViewBtn link="board" />
                    </div>
                    <div className="preview-box blur-box">
                        <div className="title-wrap">
                            <TitleContent _id="1" title="test" date="2021-01-01" comment={[]} />
                            <TitleContent _id="1" title="test" date="2021-01-01" comment={['asdfasdf']} />
                            <TitleContent _id="1" title="test" date="2021-01-01" comment={['asdfasdf']} />
                            <TitleContent _id="1" title="test" date="2021-01-01" comment={['asdfasdf']} />
                            <TitleContent _id="1" title="test" date="2021-01-01" comment={['asdfasdf']} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

