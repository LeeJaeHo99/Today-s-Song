import { get } from "http";

interface RecommendData {
    _id?: string;
    recommendTitle: string;
    recommendSinger: string;
}
export default async function RecommendTable({getData}) {
    let viewData = getData.slice(0, 10);
    return (
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th className="title-part">제목</th>
                    <th>가수</th>
                </tr>
            </thead>
            <tbody>
                {viewData.map((data: RecommendData, i: number) => {
                    return (
                        <tr key={data._id}>
                            <td>{i + 1}</td>
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
