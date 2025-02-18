import SectionTitle from "@/components/SectionTitle";
import NoticeContent from '@/components/Notice/NoticeContent';

export default function NoticePage() {
    return (
        <div className="notice-page sub-page--wrap">
            <div className="inner">
                <SectionTitle title={"공지사항"} />
                <NoticeContent/>
            </div>
        </div>
    );
};