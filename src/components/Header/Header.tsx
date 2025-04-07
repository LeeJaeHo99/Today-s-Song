'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BtnComponent from '@/components/Btn/BtnComponent';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathName = usePathname();

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
        <header className={`${isScrolled && 'scrolled' || pathName !== '/' && 'scrolled'}`}>
            <div className="inner">
                <h1><Link href={'/'}>💿 오느래 노래</Link></h1>
                <HeaderList/>
            </div>
        </header>
    );
}


function HeaderList(){
    const router= useRouter();
    const onClickLoginBtn = () => {
        router.push('/login');
    }
    const onClickAdminBtn = () => {
        router.push('/admin');
    }
    const userId = 1;

    return(
        <ul>
            <li>
                <Link href={'/notice'}>공지사항</Link>
            </li>
            <li>
                <Link href={'/everydaySong'}>매일노래</Link>
            </li>
            <li>
                <Link href={'/free-board'}>자유게시판</Link>
            </li>
            <li>
                <BtnComponent onClick={onClickLoginBtn} type={'login-btn'} text={'로그인'}/>
            </li>
            {
                userId === 0 && 
                <li>
                    <BtnComponent onClick={onClickAdminBtn} type={'admin-btn'} text={'관리자'}/>
                </li>
            }
        </ul>
    );
}