'use client';

import { useEffect, useState } from "react";

export default function MusicDesc() {
    const [title, setTitle] = useState<string>("");
    const [singer, setSinger] = useState<string>("");
    const [isMorning, setIsMorning] = useState<string | null>(null);

    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();
        const time = hours < 18 && hours > 6 ? "morning" : "night";
        setIsMorning(time);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`);
            const result = await response.json();
            if(isMorning === null) return;
            setTitle(`${result.data[result.data.length - 1][isMorning].title}`);
            setSinger(`${result.data[result.data.length - 1][isMorning].singer}`);
        }
        fetchData();
    }, [isMorning])

    return (
        <div className="music-desc--wrap">
            <ul className="music-desc">
                <li>
                    <div className={`title view`}>{title}</div>
                </li>
                <li>
                    <div className={`singer view`}>{singer}</div>
                </li>
            </ul>
        </div>
    );
}