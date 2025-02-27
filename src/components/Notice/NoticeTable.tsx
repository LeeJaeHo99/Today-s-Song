import { noticeData } from "@/data/data";
import Link from "next/link";

export default async function NoticeTable() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getNotice`);
    const result = await response.json();
    const noticeData = result.data;
    console.log('noticeData: ', noticeData);

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
                {noticeData.map((data, i) => {
                    return (
                        <tr key={data._id}>
                            <td>{i + 1}</td>
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
