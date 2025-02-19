export type Song = [
    {
        id: number;
        date: number;
        morning: {
            videoId: number;
            title: string;
            singer: string;
            review: {
                id: number;
                userName: string;
                content: string;
                rate: number;
            }[]
        }[];
        night: {
            videoId: number;
            title: string;
            singer: string;
            review: {
                id: number;
                userName: string;
                content: string;
                rate: number;
            }[]
        }[];
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