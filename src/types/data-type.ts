export type TodaySong = {
    id: number;
    videoId: string;
    title: string;
    singer: string;
    time: string;
}

export type RecommendSong = {
    id: number;
    title: string;
    singer: string;
    userName: string;
}[];

export type NoticeData = {
    id: number;
    title: string;
    content: string;
    author: string;
    date: number;
}[];


// ===========

export interface SongData{
    _id: string;
    date: {
        year: string;
        month: string;
        day: string;
    };
    morning: {
        videoId: string;
        title: string;
        singer: string;
    };
    night: {
        videoId: string;
        title: string;
        singer: string;
    };
}

export interface CommentData {
    _id: string;
    comment: string;
}