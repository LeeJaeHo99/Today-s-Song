import { everyDaySongData } from "@/data/data";
import Image from "next/image";

export default function SongHistory() {
    return (
        <div className="song-history--wrap">
            {everyDaySongData.map((data) => {
                return (
                    <div key={data.id}>
                        <div className="song-history--date">
                            {data.date.year}년 {data.date.month}월{" "}
                            {data.date.day}일
                        </div>
                        <div className="song-history--music--wrap">
                            <HistoryMusic
                                thumnail={data.morning.videoId}
                                title={data.morning.title}
                                singer={data.morning.singer}
                            />
                            <HistoryMusic
                                thumnail={data.night.videoId}
                                title={data.night.title}
                                singer={data.night.singer}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

interface HistoryMusicProp {
    thumnail: React.ReactNode;
    title: React.ReactNode;
    singer: React.ReactNode;
}

function HistoryMusic({ thumnail, title, singer }: HistoryMusicProp) {
    const thumbnailUrl = `https://img.youtube.com/vi/${thumnail}/maxresdefault.jpg`;

    return (
        <div className="song-history--music">
            <Image
                className={`song-history--music__img`}
                src={thumbnailUrl}
                width={400}
                height={320}
                alt="thumnail"
            />
            <div className="song-history--music__info">
                <div className="title">{title}</div>
                <div className="singer">{singer}</div>
            </div>
        </div>
    );
}
