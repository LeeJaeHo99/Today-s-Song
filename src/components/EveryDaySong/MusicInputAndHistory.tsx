"use client";   

import { useEffect, useState } from "react";
import { SongData } from "@/types/data-type";
import SelectMonthInput from "./SelectMonthInput";
import SongHistory from "./SongHistory";

export default function MusicInputAndHistory() {
    const [musicData, setMusicData] = useState<SongData[]>([]);
    useEffect(() => {
        const fetchMusicData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`);
            if(!response.ok){
                alert('오류가 발생하였습니다. 새로고침 부탁드립니다.');
            }
            const result = await response.json();
            setMusicData(result.data.reverse() || []);
        };
        fetchMusicData();
    }, []);

    return (
        <>
            <SelectMonthInput/>
            <SongHistory  music={musicData}/>
        </>
    );
}