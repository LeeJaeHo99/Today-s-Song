"use client";

import { MusicThumnailProp } from "@/types/types";
import Image from "next/image";

export default function MusicThumbnail({
    videoId,
    isPlaying,
}: MusicThumnailProp) {
    const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div>
            {videoId ? (
                <Image
                    className={`music-thumbnail--img ${
                        isPlaying ? `play` : `pause`
                    }`}
                    src={thumbnail}
                    width={480}
                    height={480}
                    alt="thumbnail"
                />
            ) : (
                <div className="music-thumbnail--none"></div>
            )}
        </div>
    );
}
