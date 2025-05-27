'use client';

import { animate, stagger } from "motion"
import { splitText } from "motion-plus"
import { useEffect, useRef, useState } from "react"

const lyric = [
    `저 많은 별을 다 세어 보아도 그대 마음은 헤아릴 수 없어요  그대의 부서진 마음 조각들이 차갑게 흩어져 있는 탓에  그댄 나의 어떤 모습들을 그리도 깊게 사랑했나요  이제 내가 해줄 수 있는 건 좋은 밤 좋은 꿈 안녕  좋은 밤 좋은 꿈 안녕 시월의 서늘한 공기 속에도  장미향을 난 느낄 수가 있죠  오월 어느 날에 피었던 빨갛던 밤을 기억하거든요  그댄 나의 어떤 모습들을 그리도 깊게 사랑했나요  이제 내가 해줄 수 있는 건 좋은 밤 좋은 꿈 안녕  까만 밤이 다 지나고 나면 이야기는 사라질 테지만  이름 모를 어떤 꽃말처럼 그대 곁에 남아 있을게요  나는 그대 어떤 모습들을 그리도 깊게 사랑했었나  이제 내가 해줄 수 있는 건 좋은 밤 좋은 꿈 안녕`    
];

export default function Lyric() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState('false');

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
    
    
    const splitLyric = lyric[0].split('  ');

    return (
        <div className="lyric blur-box" ref={containerRef}>
            {splitLyric.map((item, i) => (
                <p key={i} className={isVisible}>{item}</p>
            ))}
        </div>
    );
}