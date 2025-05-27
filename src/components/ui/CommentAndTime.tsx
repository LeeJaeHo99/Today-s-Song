"use client";

import { useState, useEffect } from "react";
import Comment from "./Comment";
import WriteComment from "./WriteComment";
import { CommentData } from "@/types/types";

export default function CommentAndTime() {
    const [isMorning, setIsMorning] = useState(false);
    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();
        setIsMorning(hours >= 6 && hours < 18);
    }, []);

    const [comment, setComment] = useState<CommentData[]>([]);
    useEffect(() => {
        const getComment = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getReview`);
            const result = await response.json();
            const commentData = result.data;
            const reverseData = [...commentData].reverse();
            setComment(reverseData);
        }
        getComment();
    }, []);

    return (
        <div className="comment">
            <Comment comment={comment}/>
            <WriteComment comment={comment} setComment={setComment}/>
            <div className="time blur-box">
                <p>{isMorning ? "☀️" : "🌙"}</p>
            </div>
        </div>
    );
}