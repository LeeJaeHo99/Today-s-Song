"use client";

import { useState, useEffect } from "react";
import { CommentData } from "@/types/data-type";

export default function Comment({ comment }: { comment?: CommentData[] }) {
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

    if (!comment || comment.length === 0) {
        return (
            <div className="comment-wrap blur-box">
                <span className={`fadeIn`}>
                    댓글을 기다리고 있습니다.
                </span>
            </div>
        );
    }
    return (
        <div className="comment-wrap blur-box">
            <span className={`${visible ? "fadeIn" : "fadeOut"}`}>
                {comment[currentIndex]?.comment}
            </span>
        </div>
    );
}
