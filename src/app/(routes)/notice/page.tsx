import SectionTitle from "@/components/ui/SectionTitle";
import NoticeTable from '@/components/Notice/NoticeTable';

export default function NoticePage() {
    return (
        <div className="notice-page sub-page--wrap">
            <div className="inner">
                <SectionTitle title={"공지사항"} />
                <NoticeTable/>
            </div>
        </div>
    );
};