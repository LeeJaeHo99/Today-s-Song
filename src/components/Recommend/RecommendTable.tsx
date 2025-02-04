import { recommendData } from "@/data/data";

export default function RecommendTable() {
    return (
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th className="title-part">제목</th>
                    <th>가수</th>
                    <th>작성자</th>
                </tr>
            </thead>
            <tbody>
                {recommendData.map((data) => {
                    return (
                        <tr key={data.id}>
                            <td>{data.id + 1}</td>
                            <td className="title-part">{data.title}</td>
                            <td>{data.singer}</td>
                            <td>{data.author}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
