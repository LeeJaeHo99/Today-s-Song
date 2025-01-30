"use client";

import { motion } from "motion/react";

import Image from "next/image";

interface MusicThumnailProp {
    videoId: React.ReactNode;
    isPlaying: React.ReactNode;
}

export default function MusicThumbnail({
    videoId,
    isPlaying,
}: MusicThumnailProp) {
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            <Image
                className={`music-thumnail--img ${
                    isPlaying ? `play` : `pause`
                }`}
                src={thumbnailUrl}
                width={480}
                height={480}
                alt="thumnail"
            />
        </motion.div>
    );
}
