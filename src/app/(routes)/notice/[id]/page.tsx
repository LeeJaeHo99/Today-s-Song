import SectionTitle from "@/components/ui/SectionTitle";
import NoticeContent from '@/components/Notice/NoticeContent';

export default async function NoticePage() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getNotice`);
    const result = await response.json();
    const noticeData = result.data;

    return (
        <div className="notice-page sub-page--wrap">
            <div className="inner">
                <SectionTitle title={"공지사항"} />
                <NoticeContent noticeData={noticeData}/>
            </div>
        </div>
    );
};