"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { HistoryMusicProp } from "@/types/types";
import Link from "next/link";

export default function HistoryMusic({
    thumnail,
    title,
    singer,
}: HistoryMusicProp) {
    const thumbnailUrl = `https://img.youtube.com/vi/${thumnail}/maxresdefault.jpg`;

    return (
        <motion.div
            className="song-history--music blur-box"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 1 }}
            transition={{
                duration: 1.5,
                ease: [0, 0.71, 0.2, 1.01],
            }}
        >
            <Link
                href={`https://www.youtube.com/results?search_query=${title}+${singer}`}
                target="_blank"
            >
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
            </Link>
        </motion.div>
    );
}
