'use client';

import { useEffect, useState } from "react"
import Spinner from "../spinner/Spinner";

export default function Lyric() {
    const [isLoading, setIsLoading] = useState(true);
    const [isMorning, setIsMorning] = useState<string>('morning');

    const getTime = () => {
        const now = new Date();
        const hours = now.getHours();
        setIsMorning(hours < 18 && hours > 6 ? 'morning' : 'night');
    }

    const [lyric, setLyric] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            getTime();
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`);
            const result = await response.json();
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