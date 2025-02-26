
export default async function RecommendTable() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getRecommend`);
    const result = await response.json();
    const recommendData = result.data[0].recommendMusic;

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
                {recommendData.map((data, i) => {
                    return (
                        <tr key={data._id}>
                            <td>{i + 1}</td>
                            <td className="title-part">{data.recommendTitle}</td>
                            <td>{data.recommendSinger}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
