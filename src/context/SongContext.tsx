'use client';

import { SongProviderProp } from '@/types/types';
import { createContext, useContext, useState } from 'react';

const SongContext = createContext(undefined);

export default function SongProvider({children}: SongProviderProp){
    const [song, setSong] = useState({
        videoId: '',
        title: '',
        singer: '',
    })

    return(
        <SongContext.Provider value={{}}>
            {children}
        </SongContext.Provider>
    );
}