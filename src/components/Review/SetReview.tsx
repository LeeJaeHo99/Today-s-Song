'use client';

import { motion } from "motion/react";
import { useState } from "react";

export default function SetReview() {
    const [reviewText, setReviewText] = useState('');
    const handleChange = (e) => {
        if(e.target.value.length <= 50){
            setReviewText(e.target.value);
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
        >
            <select name="rate" id="">
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
                name="review-text"
                placeholder="한줄평을 50글자 이내로 남겨주세요."
                required
            />
            <button type="submit">저장하기</button>
        </motion.form>
    );
}
