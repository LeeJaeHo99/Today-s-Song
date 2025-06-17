'use client';

import { motion } from "motion/react";
import Image from "next/image";

interface YouTubePlaceholderProps {
    videoId: string;
    onClick: () => void;
    isPlaying: boolean;
}

export default function YouTubePlaceholder({ videoId, onClick, isPlaying }: YouTubePlaceholderProps) {
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <motion.div 
            className="youtube-placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="thumbnail-container">
                <Image 
                    src={thumbnailUrl} 
                    width={480}
                    height={480}
                    alt="YouTube thumbnail"
                    priority
                    className={`music-thumbnail--img ${isPlaying ? 'play' : 'pause'}`}
                />
                <button 
                    className='play-btn'
                    onClick={onClick}
                    aria-label={isPlaying ? "일시정지" : "재생"}
                >
                    <span className="play-icon"></span>
                </button>
            </div>
        </motion.div>
    );
} 