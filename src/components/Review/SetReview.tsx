'use client';

import { useState } from "react";

export default function SetReview() {
    const [reviewText, setReviewText] = useState('');
    const handleChange = (e) => {
        if(e.target.value.length <= 50){
            setReviewText(e.target.value);
        }
    }

    return (
        <form className="set-review-component" action="">
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
            <button type="button">저장하기</button>
        </form>
    );
}
