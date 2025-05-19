"use client";

import { useState, useEffect } from "react";

const comment = [
    "정말 좋은 노래네요1정말 좋은 노래네요1",
    "정말 좋은 노래네요2정말 좋은 노래네요2",
    "정말 좋은 노래네요3정말 좋은 노래네요3",
    "정말 좋은 노래네요4정말 좋은 노래네요4",
    "정말 좋은 노래네요5정말 좋은 노래네요5",
    "정말 좋은 노래네요6정말 좋은 노래네요6",
    "정말 좋은 노래네요7정말 좋은 노래네요7",
];

export default function CommentAndTime() {
    const [isMorning, setIsMorning] = useState(false);

    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();
        setIsMorning(hours >= 6 && hours < 18);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (!comment || comment.length === 0) return;

        const interval = setInterval(() => {
            setVisible(false);

            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % comment.length);
                setVisible(true);
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, [comment]);

    return (
        <div className="comment">
            <div className="comment-wrap blur-box">
                <span className={`${visible ? "fadeIn" : "fadeOut"}`}>
                    {comment[currentIndex]}
                </span>
            </div>
            <div className="time blur-box">
                <p>{isMorning ? "☀️" : "🌙"}</p>
            </div>
        </div>
    );
}
