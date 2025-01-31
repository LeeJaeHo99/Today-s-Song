import SectionTitle from "@/components/SectionTitle";
import NoticeComment from '../../../../components/Notice/NoticeComment';

export default function NoticePage() {
    return (
        <div className="notice-page sub-page--wrap">
            <div className="inner">
                <SectionTitle title={"공지사항"} />
                <NoticeComment/>
            </div>
        </div>
    );
};