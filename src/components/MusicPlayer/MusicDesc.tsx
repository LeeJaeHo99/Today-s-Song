'use client';

import { useEffect, useState } from "react";

export default function MusicDesc() {
    const [isView, setIsView] = useState('');

    useEffect(() => {
            setIsView('view');
    }, []);

    return (
        <div className="music-desc--wrap">
            <ul className="music-desc">
                <li>
                    <div className={`title ${isView}`}>좋은 밤 좋은 꿈</div>
                </li>
                <li>
                    <div className={`singer ${isView}`}>Nerd Connection</div>
                </li>
            </ul>
        </div>
    );
}