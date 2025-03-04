'use client';

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SetReview() {
    const router = useRouter();
    const [reviewText, setReviewText] = useState('');
    const [rate, setRate] = useState('5');

    const handleChange = (e) => {
        if (e.target.value.length <= 50) {
            setReviewText(e.target.value);
        }
    };

    const handleRateChange = (e) => {
        setRate(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = {
            content: reviewText,
            rate: rate,
            userName: "이재호",  // ⭐️ 유저명을 임시로 추가 (실제 로그인 정보에서 가져오도록 수정 가능)
            songTitle: "잘 지내자, 우리",  // ⭐️ 노래 제목도 임시 추가
        };

        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/postReview`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(reviewData),
            });
            router.refresh();
            setReviewText('');
            setRate('5');
        }
        catch(e){

        }
    }

    return (
        <motion.form 
            className="set-review-component" 
            action=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
        >
            <select name="rate" value={rate} onChange={handleRateChange}>
                <option value="5">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</option>
                <option value="4">⭐️ ⭐️ ⭐️ ⭐️</option>
                <option value="3">⭐️ ⭐️ ⭐️</option>
                <option value="2">⭐️ ⭐️</option>
                <option value="1">⭐️</option>
            </select>
            <input
                onChange={handleChange}
                value={reviewText}
                type="text"
                name="content"
                placeholder="한줄평을 50글자 이내로 남겨주세요."
                required
            />
            <button type="submit">저장하기</button>
        </motion.form>
    );
}
