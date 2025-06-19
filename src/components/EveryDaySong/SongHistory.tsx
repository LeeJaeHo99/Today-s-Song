"use client";

import HistoryMusic from "./HistoryMusic";
import { useSelectedDate } from "@/store/store";
import { SongData } from "@/types/data-type";
import { useEffect, useState } from "react";
import NoneMusic from "./NoneMusic";

export default function SongHistory({ music }: { music: SongData[] }) {
    console.log('music: ', music);
    const [musicList, setMusicList] = useState([...music]);

    const { selectedDate } = useSelectedDate();
    const selectedYear = Number(selectedDate.split("-")[0]);
    const selectedMonth = Number(selectedDate.split("-")[1]);

    useEffect(() => {
        const filteredMusic = music.filter((data) => {
            return Number(data.date.year) === selectedYear && Number(data.date.month) === selectedMonth;
        });
        setMusicList(filteredMusic);
    }, [selectedYear, selectedMonth, music]);
    
    return (
        <div className="song-history--wrap">
            {musicList.length > 0 ? (
                musicList.map((data) => {
                    return (
                        <div key={data._id}>
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
                })
            ) : <NoneMusic />}
        </div>
    );
}

