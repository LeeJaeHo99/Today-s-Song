"use client";

import { useState, useEffect } from "react";
import Comment from "./Comment";
import WriteComment from "./WriteComment";

export default function CommentAndTime() {
    const [isMorning, setIsMorning] = useState(false);
    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();
        setIsMorning(hours >= 6 && hours < 18);
    }, []);

    const [comment, setComment] = useState([]);
    useEffect(() => {
        const getComment = async () => {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getReview`);
            const result = await response.json();
            const commentData = result.data;
            setComment(commentData);
        }
        getComment();
    }, []);

    return (
        <div className="comment">
            <Comment comment={comment}/>
            <WriteComment setComment={setComment}/>
            <div className="time blur-box">
                <p>{isMorning ? "☀️" : "🌙"}</p>
            </div>
        </div>
    );
}