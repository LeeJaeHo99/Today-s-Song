'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 200){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <header className={`${isScrolled && 'scrolled'}`}>
            <div className="inner">
                <h1>
                    💿 오느래 노래
                </h1>
                <HeaderList/>
            </div>
        </header>
    );
}

function HeaderList(){
    return(
        <ul>
            <li>
                <Link href={'/'}>공지사항</Link>
            </li>
            <li>
                <Link href={'/'}>감상평</Link>
            </li>
            <li>
                <Link href={'/'}>노래신청</Link>
            </li>
            <li>
                <Link href={'/'}>매일노래</Link>
            </li>
        </ul>
    );
}