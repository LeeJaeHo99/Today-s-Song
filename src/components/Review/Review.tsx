"use client";

import Image from "next/image";
import { Review } from "@/types/data-type";
import { useEffect, useState } from "react";

export default function Review({ musicInfo }) {
    let [time, setTime] = useState("");
    const [reviewData, setReviewData] = useState(null); // ✅ reviewData 상태 추가

    useEffect(() => {
        const now = new Date();
        const currentHour = now.getHours();

        if (currentHour >= 6 && currentHour < 18) {
            setTime("morning");
        } else {
            setTime("night");
        }
    }, []);

    useEffect(() => {
        if (time && musicInfo) {
            setReviewData(musicInfo[time]); // ✅ time이 변경될 때 reviewData 업데이트
        }
    }, [time, musicInfo]); 


    return (
        <div className="review-component">
            <div className="rate-wrap">
                {/* {Array.from({ length: rate }, (rate, i) => (
                    <Image
                        key={i}
                        className="rate"
                        src={"/icons/star.png"}
                        width={40}
                        height={40}
                        alt="star-icon"
                    />
                ))} */}
            </div>
            <div className="nickname">
                {/* - <span>{userName}</span> - */}
                {time}
            </div>
            {/* <div className="review-text">{content}</div> */}
        </div>
    );
}
