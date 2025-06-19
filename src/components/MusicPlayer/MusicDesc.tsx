export const revalidate = 60 * 60 * 6;

export default async function MusicDesc() {
    const now = new Date();
    const hours = now.getHours();
    
    const dateStr = now.toISOString().split('T')[0];
    const timeSlot = hours < 18 && hours >= 6 ? 'morning' : 'night';
    const cacheKey = `${dateStr}-${timeSlot}`;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`, {
        next: { 
            tags: [cacheKey],
            revalidate: 0
        },
    });
    const result = await res.json();

    const isMorning = hours >= 6 && hours < 18 ? "morning" : "night";
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
