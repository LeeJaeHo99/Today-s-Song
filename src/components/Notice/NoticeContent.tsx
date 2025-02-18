'use client';

import { noticeData } from "@/data/data";
import { usePathname } from "next/navigation";

export default function NoticeContent(){
    const data = noticeData;
    const pathName = usePathname();
    const pathNum = pathName?.split('/')?.[2];

    return(
        <div className="notice-content">
            <div className="notice-content--header">
                <h3 className="title">제목 입니다.</h3>
            </div>
            <div className="notice-content--body">
                <div className="content-info--wrap">
                    <div className="author">
                        <span>작성자: </span>
                        <span className="author-info">관리자</span>
                    </div>
                    <div className="date">
                        <span>작성일: </span>
                        <span className="date-info">2024-02-18</span>
                    </div>
                </div>
                <div className="content-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, id incidunt a reiciendis eveniet cum similique in, est doloremque sit voluptatum. Ex rerum sint, maxime sit molestias commodi. Reiciendis, perferendis.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, id incidunt a reiciendis eveniet cum similique in, est doloremque sit voluptatum. Ex rerum sint, maxime sit molestias commodi. Reiciendis, perferendis.
                </div>
            </div>
        </div>
    );
}