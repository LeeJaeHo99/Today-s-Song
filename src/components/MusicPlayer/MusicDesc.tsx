'use client';

import { useEffect, useState } from "react";

export default function MusicDesc() {
    const [title, setTitle] = useState<string>("");
    const [singer, setSinger] = useState<string>("");
    const [isMorning, setIsMorning] = useState<string>('morning');
    const [isView, setIsView] = useState('');

    const getTime = () => {
        const now = new Date();
        const hours = now.getHours();
        setIsMorning(hours < 18 && hours > 6 ? 'morning' : 'night');
    }

    useEffect(() => {
        getTime();
        const fetchData = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`);
            const result = await response.json();
            setTitle(`${result.data[result.data.length - 1][isMorning].title}`);
            setSinger(`${result.data[result.data.length - 1][isMorning].singer}`);
        }
        fetchData();
    }, [isMorning])

    useEffect(() => {
        setIsView('view');
    }, []);

    return (
        <div className="music-desc--wrap">
            <ul className="music-desc">
                <li>
                    <div className={`title ${isView}`}>{title}</div>
                </li>
                <li>
                    <div className={`singer ${isView}`}>{singer}</div>
                </li>
            </ul>
        </div>
    );
}