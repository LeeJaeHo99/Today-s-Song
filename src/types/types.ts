export interface TitleProp{
    title: React.ReactNode;
}

export interface MusicHistoryProp{
    time: React.ReactNode;
    musicData: React.ReactNode;
}

export interface HistoryMusicProp {
    thumnail: React.ReactNode;
    title: React.ReactNode;
    singer: React.ReactNode;
}

export interface MusicThumnailProp {
    videoId: React.ReactNode;
    isPlaying?: React.ReactNode;
}

export interface SongProviderProp{
    children: React.ReactNode;
}

export interface MusicDataProp{
    musicData: {
        videoId: string;
        title: string;
        singer: string;
    }
}



// STORE
export interface VideoIdType {
    videoId: string;
    setVideoId: (id: string) => void;
}

export interface SelectedDateType{
    selectedDate: string;
    setSelectedDate: (date: string) => void
}

