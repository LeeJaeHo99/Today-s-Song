'use client';

import { useTablePagination } from '@/store/store';

interface RecommendData {
    _id?: string;
    recommendTitle: string;
    recommendSinger: string;
}
export default function RecommendTable({getData}) {
    const {pagination} = useTablePagination();
    const viewData: string[] = getData.slice(pagination * 10, (pagination + 1) * 10);

    return (
        <table>
            <thead>
                <tr>
                    <th>신청자</th>
                    <th className="title-part">제목</th>
                    <th>가수</th>
                </tr>
            </thead>
            <tbody>
                {viewData.map((data: RecommendData, i: number) => {
                    return (
                        <tr key={data._id}>
                            <td>null</td>
                            <td className="title-part">
                                {data.recommendTitle}
                            </td>
                            <td>{data.recommendSinger}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
