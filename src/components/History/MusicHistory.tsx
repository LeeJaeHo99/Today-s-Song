import Image from "next/image";
import Link from "next/link";
import { MusicHistoryProp } from "@/types/types";


export default function MusicHistory({time, musicData}: MusicHistoryProp) {
    const thumbnailUrl = `https://img.youtube.com/vi/${musicData.videoId}/maxresdefault.jpg`;
    return (
        <Link href={"/everydaySong"} className="music-history--component blur-box">
            <div className="rate-wrap">
                <div className="time-icon">{time}</div>
            </div>
            <Image
                className="music-thumnail"
                src={thumbnailUrl}
                width={480}
                height={480}
                alt="music-thumnail"
            />
            <div className="music-desc">
                <div className="title">{musicData.title}</div>
                <div className="singer">{musicData.singer}</div>
            </div>
        </Link>
    );
}
