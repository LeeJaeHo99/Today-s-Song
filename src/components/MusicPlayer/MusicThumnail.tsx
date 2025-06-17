"use client";

import { MusicThumnailProp } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

export default function MusicThumbnail({
    videoId,
    isPlaying,
}: MusicThumnailProp) {
    const [isLoading, setIsLoading] = useState(true);
    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    return (
        <div>
            {videoId ? (
                <div className="thumbnail-container">
                    {isLoading && (
                        <div className="thumbnail-placeholder" />
                    )}
                    <Image
                        className={`music-thumbnail--img ${
                            isPlaying ? `play` : `pause`
                        }`}
                        src={thumbnail}
                        width={480}
                        height={480}
                        alt="thumbnail"
                        priority={false}
                        loading="lazy"
                        onLoad={() => setIsLoading(false)}
                        quality={75}
                    />
                </div>
            ) : (
                <div className="music-thumbnail--none"></div>
            )}
        </div>
    );
}
