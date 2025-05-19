'use client';

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function SetReview() {
    const router = useRouter();
    const [reviewText, setReviewText] = useState('');

    const handleChange = (e) => {
        if (e.target.value.length <= 50) {
            setReviewText(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = {
            content: reviewText,
            userName: "이재호",  // ⭐️ 유저명을 임시로 추가 (실제 로그인 정보에서 가져오도록 수정 가능)
        };

        try{
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/postReview`,{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(reviewData),
            });
            router.refresh();
            setReviewText('');
            setRate('5');
        }
        catch(e){
            console.log(e);
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
            <input
                onChange={handleChange}
                value={reviewText}
                type="text"
                name="content"
                placeholder="한줄평을 50글자 이내로 남겨주세요."
                required
            />
            <button type="submit">
                <Image src={'/icons/write.png'} alt="write" width={24} height={24}/>
            </button>
        </motion.form>
    );
}
