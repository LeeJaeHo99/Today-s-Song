"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { CommentData } from "@/types/data-type";
import { motion, AnimatePresence } from "motion/react";

export default function Comment({ comment }: { comment?: CommentData[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const memoizedComments = useMemo(() => comment || [], [comment]);

    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const fadeTimerRef = useRef<NodeJS.Timeout | null>(null);

    const transitionComment = useCallback(() => {
        fadeTimerRef.current = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % memoizedComments.length);
        }, 300);
    }, [memoizedComments.length]);

    useEffect(() => {
        if (memoizedComments.length <= 1) return;

        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        if (fadeTimerRef.current) {
            clearTimeout(fadeTimerRef.current);
        }

        timerRef.current = setInterval(transitionComment, 5000);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
            if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
        };
    }, [memoizedComments.length, transitionComment]);

    if (!memoizedComments.length) {
        return (
            <motion.div 
                className="comment-wrap blur-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <span>댓글을 기다리고 있습니다.</span>
            </motion.div>
        );
    }

    if (memoizedComments.length === 1) {
        return (
            <motion.div 
                className="comment-wrap blur-box"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                <span>{memoizedComments[0].comment}</span>
            </motion.div>
        );
    }

    return (
        <div className="comment-wrap blur-box">
            <AnimatePresence mode="wait">
                <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    {memoizedComments[currentIndex].comment}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
