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
                    <div className={`title ${isView}`}>숲</div>
                </li>
                <li>
                    <div className={`singer ${isView}`}>최유리</div>
                </li>
            </ul>
        </div>
    );
}