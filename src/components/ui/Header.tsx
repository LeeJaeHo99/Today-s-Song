'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Header() {

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (header) {
                header.classList.toggle('blur-box', window.scrollY > 0);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header>
            <div className="inner">
                <h1><Link href={'/'}>𝙏͜𝙊͜𝘿͜𝘼͜𝙔͜𝙎͜𝙎͜𝙊͜𝙉͜𝙂͜</Link></h1>
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
                <Link href={'/everydaySong'}>매일노래</Link>
            </li>
            <li>
                <Link href={'/board'}>자유게시판</Link>
            </li>
        </ul>
    );
}