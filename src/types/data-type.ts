export type TodaySong = {
    id: number;
    videoId: string;
    title: string;
    singer: string;
    time: string;
}

export type Song = [
    {
        id: number;
        date: number;
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
    },
];

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