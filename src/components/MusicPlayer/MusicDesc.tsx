export default async function MusicDesc() {
    let data;

    try{
        const now = new Date();
        const hours = now.getHours();
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`);
        const result = await res.json();
        const isMorning = hours >= 6 && hours < 18 ? "morning" : "night";
        data = result.data[result.data.length - 1][isMorning];
    } catch (error) {
        if(error instanceof Error) {
            return new Response(JSON.stringify({ message: error.message }), {
                status: 500,
            });
        }
    }



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
