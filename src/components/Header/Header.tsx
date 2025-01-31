'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY >= 300){
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
                <h1><Link href={'/'}>💿 오느래 노래</Link></h1>
                <HeaderList/>
            </div>
        </header>
    );
}

function HeaderList(){
    return(
        <ul>
            <li>
                <Link href={'/notice'}>공지사항</Link>
            </li>
            <li>
                <Link href={'/recommend'}>노래신청</Link>
            </li>
            <li>
                <Link href={'/everydaySong'}>매일노래</Link>
            </li>
        </ul>
    );
}