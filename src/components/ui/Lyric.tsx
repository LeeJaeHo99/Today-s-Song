'use client';

import { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";

export default function Lyric({
    isLoading,
    lyric,
}: {
    isLoading: boolean;
    lyric: string;
}) {
    const [lyricData, setLyricData] = useState<string[]>([]);

    useEffect(() => {
        setLyricData(lyric.split('  '));
    }, [lyric]);

    return (
        <div className="lyric blur-box">
            {isLoading && <Spinner />}
            {!isLoading && lyricData.map((item, i) => <p key={i}>{item}</p>)}
        </div>
    );
}