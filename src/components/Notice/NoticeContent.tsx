'use client';

import { usePathname } from "next/navigation";

export default function NoticeContent({noticeData}){
    const pathName = usePathname();
    const pathNum: string = pathName?.split('/')?.[2];
    const {id, title, author, date, content} = noticeData[pathNum];

    return(
        <div className="notice-content">
            <div className="notice-content--header">
                <h3 className="title">{title}</h3>
            </div>
            <div className="notice-content--body">
                <div className="content-info--wrap">
                    <div className="author">
                        <span>작성자: </span>
                        <span className="author-info">{author}</span>
                    </div>
                    <div className="date">
                        <span>작성일: </span>
                        <span className="date-info">{date}</span>
                    </div>
                </div>
                <div className="content-text">{content}</div>
            </div>
        </div>
    );
}