export const revalidate = 60 * 60 * 6;

export default async function MusicDesc() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`, {
        next: { revalidate: revalidate },
    });
    const result = await res.json();

    const now = new Date();
    const hours = now.getHours();
    const isMorning = hours > 6 && hours < 18 ? "morning" : "night";

    const data = result.data[result.data.length - 1][isMorning];

    return (
        <div className="music-desc--wrap">
            <ul className="music-desc">
                <li>
                    <div className="title view">{data.title}</div>
                </li>
                <li>
                    <div className="singer view">{data.singer}</div>
                </li>
            </ul>
        </div>
    );
}
