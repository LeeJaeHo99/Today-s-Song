'use client';

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef, useState } from "react"
import Spinner from "../spinner/Spinner";

export default function Lyric() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState('false');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible('true');
        }, 1);

        document.fonts.ready.then(() => {
            requestAnimationFrame(() => {
                if (!containerRef.current) return;
    
                containerRef.current.style.visibility = "visible";
    
                const pNodes = Array.from(containerRef.current.querySelectorAll("p"));
                let allWords: HTMLSpanElement[] = [];
                pNodes.forEach(p => {
                    const { words } = splitText(p);
                    allWords = allWords.concat(words);
                });
    
                animate(
                    allWords,
                    { opacity: [0, 1], y: [10, 0] },
                    {
                        type: "spring",
                        duration: 1.5,
                        bounce: 0,
                        delay: stagger(0.05),
                    }
                );
            });
        });
    }, []);

    const [isMorning, setIsMorning] = useState<string>('morning');

    const getTime = () => {
        const now = new Date();
        const hours = now.getHours();
        setIsMorning(hours < 18 && hours > 6 ? 'morning' : 'night');
    }

    const [lyric, setLyric] = useState<string[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            getTime();
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic`);
            const result = await response.json();
            setLyric(result.data.reverse()[0][isMorning].lyric.split('  '));
            setIsLoading(false);
        }
        fetchData();
    }, [isMorning]);

    return (
        <div className="lyric blur-box" ref={containerRef}>
            {isLoading && <Spinner />}
            {!isLoading && lyric.map((item, i) => (
                <p key={i} className={isVisible}>{item}</p>
            ))}
        </div>
    );
}