'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";

export default function MusicBtn() {
    const [isView, setIsView] = useState('');
    useEffect(() => {
        setIsView('view');
    },[])

    const [saveState, setSaveState] = useState(false);
    const saveHandler = () => setSaveState(!saveState);

    const [infiniteState, setInfiniteState] = useState(false);
    const infiniteHandler = () => setInfiniteState(!infiniteState);

    return (
        <div className={`music-btn--wrap ${isView}`}>
            <div className="save-btn" onClick={saveHandler}>
                <Image
                    src={`/icons/save-${saveState}.png`}
                    width={24}
                    height={24}
                    alt="save-icon"
                />
            </div>
            <div className="infinite-btn" onClick={infiniteHandler}>
                <Image
                    src={`/icons/infinite-${infiniteState}.png`}
                    width={24}
                    height={24}
                    alt="infinite-icon"
                />
            </div>
        </div>
    );
}
