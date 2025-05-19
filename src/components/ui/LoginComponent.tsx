'use client';

import Image from "next/image";
import { useState } from "react";

export default function LoginComponent(){
    const [loginId, setLoginId] = useState('');
    const [loginPw, setLoginPw] = useState('');

    
    return(
        <form className='login-component--wrap' action="">
            <label htmlFor="login-id">
                <span>
                    아이디
                    <span> *</span>
                </span>
                <input
                    id="login-id"
                    name="loginId"
                    type="text"
                    placeholder="아이디를 입력해주세요."
                    value={loginId}
                    onChange={(e) => {setLoginId(e.target.value)}}
                    required
                />
            </label>
            <label htmlFor="login-pw">
                <span>
                    비밀번호
                    <span> *</span>
                </span>
                <input
                    id="login-pw"
                    name="loginPw"
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    value={loginPw}
                    onChange={(e) => {setLoginPw(e.target.value)}}
                    required
                />
            </label>
            <button className="login-submit--btn" type="submit">
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