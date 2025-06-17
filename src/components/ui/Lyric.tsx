'use client';

import { useEffect, useState } from "react"
import Spinner from "../spinner/Spinner";

export default function Lyric() {
    const [isLoading, setIsLoading] = useState(true);
    const [isMorning, setIsMorning] = useState<string | null>(null);

    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();
        const time = hours < 18 && hours > 6 ? "morning" : "night";
        setIsMorning(time);
    }, [isMorning]);

    const [lyric, setLyric] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`);
            const result = await response.json();
            if(isMorning === null) return;
            setLyric(result.data.reverse()[0][isMorning].lyric.split('  '));
            setIsLoading(false);
        }
        fetchData();
    }, [isMorning]);

    return (
        <div className="lyric blur-box">
            {isLoading && <Spinner />}
            {!isLoading && lyric.map((item, i) => (
                <p key={i}>{item}</p>
            ))}
        </div>
    );
}