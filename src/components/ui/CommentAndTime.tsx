"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function CommentAndTime() {
    const [isMorning, setIsMorning] = useState(false);

    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();
        setIsMorning(hours >= 6 && hours < 18);
    }, []);

    return (
        <div className="comment">
            <Comment />
            <WriteComment />
            <div className="time blur-box">
                <p>{isMorning ? "☀️" : "🌙"}</p>
            </div>
        </div>
    );
}

const comment = [
    "정말 좋은 노래네요1정말 좋은 노래네요1",
    "정말 좋은 노래네요2정말 좋은 노래네요2",
    "정말 좋은 노래네요3정말 좋은 노래네요3",
    "정말 좋은 노래네요4정말 좋은 노래네요4",
    "정말 좋은 노래네요5정말 좋은 노래네요5",
    "정말 좋은 노래네요6정말 좋은 노래네요6",
    "정말 좋은 노래네요7정말 좋은 노래네요7",
];

function Comment() {
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
        <div className="comment-wrap blur-box">
            <span className={`${visible ? "fadeIn" : "fadeOut"}`}>
                {comment[currentIndex]}
            </span>
        </div>
    );
}

function WriteComment() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
    };

    const handleClose = () => {
        setIsClicked(false);
    };

    return (
        <div
            className="write-comment--component blur-box"
            onClick={handleClick}
        >
            <span>📝</span>
            {isClicked && <WriteModal onClick={handleClose} />}
        </div>
    );
}

function WriteModal({ onClick }: { onClick: () => void }) {
    const [reviewText, setReviewText] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= 30) {
            setReviewText(e.target.value);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const reviewData = {
            content: reviewText,
        };
        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/postReview`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ reviewData }),
            });
            setReviewText("");
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <form className="write-modal blur-box" onSubmit={handleSubmit}>
            <p onClick={e => {
                e.stopPropagation();
                onClick();
            }}>x</p>
            <h3>한줄평 작성</h3>
            <textarea
                value={reviewText}
                placeholder="한줄평을 작성해주세요. (30자 이내)" 
                maxLength={30}
                onChange={handleChange}
                onClick={e => e.stopPropagation()}
            ></textarea>
            <button 
                type="submit" 
                className="submit-btn--component"
                onClick={e => e.stopPropagation()}
            >
                <span>제출하기</span>
                <Image
                    src={"/icons/arrow.png"}
                    width={20}
                    height={20}
                    alt="arrow-icon"
                />
            </button>
        </form>
    );
}
