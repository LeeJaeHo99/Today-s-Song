'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface NoticeData {
    _id: string;
    title: string;
    author: string;
    date: string;
}

export default function NoticeTable() {
    const [noticeData, setNoticeData] = useState<NoticeData[]>([]);

    useEffect(() => {
        const fetchNotice = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getNotice`);
                const result = await response.json();
                setNoticeData(result.data);
            } catch (error) {
                console.error('Failed to fetch notice data:', error);
            }
        };

        fetchNotice();
    }, []);

    return (
        <table>
            <thead>
                <tr className="blur-box">
                    <th>번호</th>
                    <th className="title-part">제목</th>
                    <th>작성자</th>
                    <th>게시일</th>
                </tr>
            </thead>
            <tbody>
                {noticeData.map((data: NoticeData, i: number) => {
                    return (
                        <tr key={data._id}>
                            <td>{i + 1}</td>
                            <td className="title-part">
                                <Link href={`/notice/${i}`}>
                                    {data.title}
                                </Link>
                            </td>
                            <td>{data.author}</td>
                            <td>{data.date}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
