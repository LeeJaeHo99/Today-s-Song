"use client";

import { motion } from "motion/react";
import { MusicThumnailProp } from "@/types/types";
import Image from "next/image";

export default function MusicThumbnail({ videoId, isPlaying }: MusicThumnailProp) {
    const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

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
                className={`music-thumbnail--img ${
                    isPlaying ? `play` : `pause`
                }`}
                src={thumbnail}
                width={480}
                height={480}
                alt="thumbnail"
            />
        </motion.div>
    );
}
