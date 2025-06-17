"use client";

import { useEffect, useState } from "react";

export default function MusicDesc() {
    const [title, setTitle] = useState<string>("로딩 중...");
    const [singer, setSinger] = useState<string>("");

    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();
        const isMorning = hours > 6 && hours < 18 ? "morning" : "night";

        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`
                );
                const result = await response.json();
                const data = result.data[result.data.length - 1][isMorning];
                setTitle(data.title);
                setSinger(data.singer);
            } catch (error) {
                setTitle("데이터를 불러오는 중 오류가 발생했습니다.");
                setSinger("");
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="music-desc--wrap">
            <ul className="music-desc">
                <li>
                    <div className="title view">{title}</div>
                </li>
                <li>
                    <div className="singer view">{singer}</div>
                </li>
            </ul>
        </div>
    );
}
