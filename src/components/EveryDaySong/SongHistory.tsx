import HistoryMusic from "./HistoryMusic";

export default async function SongHistory() {
    let response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`);
    if(!response.ok){
        alert('오류가 발생하였습니다. 새로고침 부탁드립니다.');
    }
    let result = await response.json();
    let musicData = result.data;

    return (
        <div className="song-history--wrap">
            {musicData.map((data) => {
                return (
                    <div key={data._id}>
                        <div className="song-history--date">
                            {data.date.year}년 {data.date.month}월{" "} {data.date.day}일
                        </div>
                        <div className="song-history--music--wrap">
                            <HistoryMusic
                                thumnail={data.morning.videoId}
                                title={data.morning.title}
                                singer={data.morning.singer}
                            />
                            <HistoryMusic
                                thumnail={data.night.videoId}
                                title={data.night.title}
                                singer={data.night.singer}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}