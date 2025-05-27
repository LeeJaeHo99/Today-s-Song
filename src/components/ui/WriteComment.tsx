'use client';

import Image from "next/image";
import { useState } from "react";
import { CommentData } from "@/types/data-type";

export default function WriteComment({ setComment, comment}: {setComment: (comment: CommentData[]) => void, comment: CommentData[]}) {
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
            {isClicked && <WriteModal onClick={handleClose} setComment={setComment} handleClose={handleClose} comment={comment}/>}
        </div>
    );
}

function WriteModal({ onClick, setComment, handleClose, comment }: { onClick: () => void, setComment: (comment: CommentData[]) => void, handleClose: () => void, comment: CommentData[] }) {
    const [reviewText, setReviewText] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= 30) {
            setReviewText(e.target.value);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/postReview`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ comment: reviewText }),
            });
            
            setReviewText("");
            handleClose();
            const newComment = { _id: Date.now().toString(), comment: reviewText } as CommentData;
            setComment([...comment, newComment]);
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
                placeholder="한줄평을 작성해주세요. (20자 이내)" 
                maxLength={20}
                onChange={handleChange}
                onClick={e => e.stopPropagation()}
                required
            ></textarea>
            <button 
                type="submit" 
                className="submit-btn--component"
                onClick={e => e.stopPropagation()}
                disabled={!reviewText.trim()}
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