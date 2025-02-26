'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MusicRecommend() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [singer, setSinger] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        if(!title || !singer){
            alert('가수와 제목을 입력해주세요.');
            return;
        }

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/postRecommend`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    recommendTitle: title,
                    recommendSinger: singer,
                }),
            });
            const data = await response.json();

            if(response.ok){
                setTitle('');
                setSinger('');
                router.refresh();
            }else{
                setMessage('오류가 발생하였습니다. 다시 시도해 주세요.1');
            }
        }
        catch (e) {
            console.error('Error: ', e);
            setMessage('오류가 발생하였습니다. 다시 시도해 주세요.2');
        }
    }

    return (
        <form className="music-recommend--component" onSubmit={handleSubmit}>
            {message && <p>{message}</p>}
            <label htmlFor="recommend-title">
                <span>
                    제목
                    <span> *</span>
                </span>
                <input
                    id="recommend-title"
                    name="recommendTitle"
                    type="text"
                    placeholder="제목을 입력해주세요."
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}
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
                    name="recommendSinger"
                    type="text"
                    placeholder="가수를 입력해주세요."
                    value={singer}
                    onChange={(e) => {setSinger(e.target.value)}}
                    required
                />
            </label>
            <button className="music-recommend-submit--btn" type="submit">
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
