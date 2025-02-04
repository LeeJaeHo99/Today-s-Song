import { everyDaySongData } from "@/data/data";
import HistoryMusic from "./HistoryMusic";

export default function SongHistory() {
    return (
        <div className="song-history--wrap">
            {everyDaySongData.map((data) => {
                return (
                    <div key={data.id}>
                        <div className="song-history--date">
                            {data.date.year}년 {data.date.month}월{" "}
                            {data.date.day}일
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