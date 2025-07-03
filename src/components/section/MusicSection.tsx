"use client";

import { useState, useEffect } from "react";
import MusicPlayer from "@/components/MusicPlayer/MusicPlayer";
import MusicDesc from "@/components/MusicPlayer/MusicDesc";
import CommentAndTime from "@/components/ui/CommentAndTime";
import Lyric from "@/components/ui/Lyric";
import { SongData } from "@/types/types";


export default function MusicSection() {
    const [isMorning, setIsMorning] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);
    const [songData, setSongData] = useState<SongData>();

    const getTime = () => {
        const now = new Date();
        const hours = now.getHours();
        setIsMorning(hours < 18 && hours > 6 ? "morning" : "night");
    };

    useEffect(() => {
        getTime();
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`);
                const result = await response.json();
                setSongData(result.data.reverse()[result.data.length - 1][isMorning]);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching music data:", error);
                setIsLoading(false);
            }
        };
        fetchData();
    }, [isMorning]);

    return (
        <section className="music-section">
            <video className="background-video" autoPlay muted loop playsInline>
                <source src="/videos/main-bg.mp4" type="video/mp4" />
            </video>
            <div className="inner">
                <div className="music-info blur-box">
                    <div className="player-wrap">
                        <MusicPlayer isLoading={isLoading} videoId={songData?.videoId ?? ""} />
                        <MusicDesc isLoading={isLoading} songData={songData ?? {}} />
                    </div>
                    <div id="youtube-player" className="music-player"></div>
                </div>
                <div className="music-section--right side-content">
                    <Lyric isLoading={isLoading} lyric={songData?.lyric ?? ""} />
                    <CommentAndTime />
                </div>
            </div>
        </section>
    );
}
