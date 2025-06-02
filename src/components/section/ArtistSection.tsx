"use client";

import { useState, useEffect } from "react";
import SectionTitle from "../ui/SectionTitle";
import SubTitle from "../ui/SubTitle";
import Image from "next/image";

interface SongData {
    img: string;
    title: string;
    album: string;
}

interface ArtistData {
    name: string;
    desc: string[];
    imgLink: string;
    songData: SongData[];
}

export default function ArtistSection() {
    const [artist, setArtist] = useState<ArtistData | null>(null);
    console.log('artist: ', artist);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/getArtist`
                );
                const result = await response.json();
                setArtist(result.data[0]);
            } catch (err) {
                setError("아티스트 정보를 불러오는데 실패했습니다.");
                console.error(err);
            }
        };
        fetchData();
    }, []);

    if (error) return <div className="error-message">{error}</div>;

    return (
        <section className="artist-section section">
            <div className="inner">
                <SectionTitle title={"🎵 아티스트 추천 🎵"} />
                <SubTitle title={"매주 추천 아티스트를 소개합니다."} />
                <div className="info-wrap blur-box">
                    {artist ? (
                        <>
                            <div className="artist-info">
                                {artist.imgLink && (
                                    <div className="artist-image">
                                        <Image
                                            src={artist.imgLink}
                                            alt={artist.name}
                                            width={190}
                                            height={190}
                                            unoptimized
                                        />
                                    </div>
                                )}
                                <div>
                                    <h3>{artist.name}</h3>
                                    <div className="artist-desc">
                                        {artist.desc.map((text, index) => (
                                            <p key={index}>{text}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="song-list">
                                <p>TOP5 SONG</p>
                                <div className="song-item-wrap">
                                    {artist.songData.map((song, index) => (
                                        <div
                                            key={index}
                                            className="song-item"
                                            onClick={() =>
                                                window.open(
                                                    `https://www.youtube.com/results?search_query=${song.title}`,
                                                    "_blank"
                                                )
                                            }
                                        >
                                            {song.img && (
                                                <Image
                                                    src={song.img}
                                                    alt={song.title}
                                                    width={120}
                                                    height={120}
                                                    unoptimized
                                                />
                                            )}
                                            <div className="song-info">
                                                <h4>{song.title}</h4>
                                                <p>{song.album}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="loading">loading...</div>
                    )}
                </div>
            </div>
        </section>
    );
}
