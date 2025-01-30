'use client';

import { motion } from "motion/react";
import Image from "next/image";

export default function MusicRecommend() {
    return (
        <>
            <motion.form 
                className="music-recommend--component" 
                action=""
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
            >
                <label htmlFor="recommend-title">
                    <span>
                        제목
                        <span> *</span>
                    </span>
                    <input
                        id="recommend-title"
                        name="recommend-title"
                        type="text"
                        placeholder="제목을 입력해주세요."
                        required
                    />
                </label>
                <label htmlFor="recommend-singer">
                    <span>
                        가수
                        <span> *</span>
                    </span>
                    <input
                        id="recommend-singer"
                        name="recommend-singer"
                        type="text"
                        placeholder="가수를 입력해주세요."
                        required
                    />
                </label>
                <label htmlFor="recommend-story">
                    <span>사연</span>
                    <input
                        id="recommend-story"
                        name="recommend-story"
                        type="text"
                        placeholder="짧은 사연을 입력해주세요."
                    />
                </label>
                <button className="music-recommend-submit--btn" type="button">
                    <span>제출하기</span>
                    <Image
                        src={"/icons/arrow.png"}
                        width={20}
                        height={20}
                        alt="arrow-icon"
                    />
                </button>
            </motion.form>
        </>
    );
}
