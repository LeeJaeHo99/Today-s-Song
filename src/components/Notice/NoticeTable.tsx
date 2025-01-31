import { noticeData } from "@/data/data";
import Link from "next/link";

export default function NoticeTable() {
    return (
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th className="title-part">제목</th>
                    <th>작성자</th>
                    <th>게시일</th>
                </tr>
            </thead>
            <tbody>
                {noticeData.map((data) => {
                    return (
                        <tr key={data.number}>
                            <td>{data.number}</td>
                            <td className="title-part">
                                <Link href={`/notice/${data.number}`}>
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
