'use client';

import Image from "next/image";
import { useState } from "react";
import Modal from "../ui/Modal";

export default function MusicRecommend() {
    const [title, setTitle] = useState('');
    const [singer, setSinger] = useState('');
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleRealSubmit = async () => {
        setMessage('');
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/postRecommend`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    recommendTitle: title,
                    recommendSinger: singer,
                }),
            });

            if (response.ok) {
                setTitle('');
                setSinger('');
                setTimeout(() => {
                    setShowModal(false);
                }, 1500);
            } else {
                setMessage('오류가 발생하였습니다. 다시 시도해 주세요.1');
            }
        } catch (e) {
            console.error('Error: ', e);
            setMessage('오류가 발생하였습니다. 다시 시도해 주세요.2');
        }
    }

    const handleSubmitClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title || !singer) {
            alert('가수와 제목을 입력해주세요.');
            return;
        }
        setShowModal(true);
    };

    return (
        <>
            <form className="music-recommend--component blur-box" onSubmit={handleSubmitClick}>
                {message && <p>{message}</p>}
                <label htmlFor="recommend-title">
                    <span>제목</span>
                    <input
                        id="recommend-title"
                        type="text"
                        value={title}
                        placeholder="제목을 입력해주세요."
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="recommend-singer">
                    <span>가수</span>
                    <input
                        id="recommend-singer"
                        type="text"
                        value={singer}
                        placeholder="가수를 입력해주세요."
                        onChange={(e) => setSinger(e.target.value)}
                        required
                    />
                </label>
                <button className="submit-btn--component" type="submit">
                    <span>제출하기</span>
                    <Image
                        src={"/icons/arrow.png"}
                        width={20}
                        height={20}
                        alt="arrow-icon"
                    />
                </button>
            </form>

            {showModal && <Modal handleRealSubmit={handleRealSubmit} setShowModal={setShowModal}/>}
        </>
    );
}
