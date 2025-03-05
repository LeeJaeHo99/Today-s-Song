'use client';

import HistoryMusic from "./HistoryMusic";
import { useSelectedDate } from "@/store/store";

export default function SongHistory({musicData}) {
    const { selectedDate, setSelectedDate } = useSelectedDate();
    console.log('selectedDate: ', selectedDate);

    const selectedYear = selectedDate.split('-')[0];
    const selectedMonth = selectedDate.split('-')[1];
    const filterMonth = selectedMonth[0] === '0' ? selectedMonth.slice(1) : selectedMonth;

    const filteredMusic = musicData.filter((music) => {
            return music.date.year === selectedYear && music.date.month === filterMonth;
    })

    return (
        <div className="song-history--wrap">
            {filteredMusic.map((data) => {
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