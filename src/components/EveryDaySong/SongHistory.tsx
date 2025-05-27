"use client";

import HistoryMusic from "./HistoryMusic";
import { useSelectedDate } from "@/store/store";
import { SongData } from "@/types/data-type";
import { useEffect, useState } from "react";

export default function SongHistory({ music }: { music: SongData[] }) {
    const { selectedDate } = useSelectedDate();
    const selectedYear = selectedDate.split("-")[0];
    const selectedMonth = selectedDate.split("-")[1];

    const [dataList, setDataList] = useState([...music.reverse().slice(0, 10)]);

    useEffect(() => {
        const filteredMusic = music.filter((data) => {
            return data.date.year === selectedYear && data.date.month === selectedMonth;
        });
        setDataList(filteredMusic);
    }, [selectedYear, selectedMonth, music]);
    
    return (
        <div className="song-history--wrap">
            {dataList.length > 0 ? (
                dataList.map((data) => {
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

function NoneMusic(){
    return (
        <div className="none-music--comment">
            🎧 현재 설정하신 날짜에 노래가 존재하지 않습니다 🎧
        </div>
    );
}