export interface TitleProp{
    title: React.ReactNode;
}

export interface MusicHistoryProp{
    time: React.ReactNode;
    musicData: {
        videoId: string;
        title: string;
        singer: string;
    };
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

export interface CommentData{
    comment: string;
    _id: string;
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

export interface SongData {
    title: string;
    singer: string;
    videoId: string;
    lyric: string;
}