import SectionTitle from "../ui/SectionTitle";

export default function DataSection() {
    return (
        <section className="data-section section">
            <div className="inner">
                <div className="notice-section">
                    <SectionTitle title="공지사항" />
                </div>
                <div className="board-section">
                    <SectionTitle title="자유게시판" />

                </div>
            </div>
        </section>
    );
}
