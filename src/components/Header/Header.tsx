import Image from "next/image";
import Link from 'next/link';

export default function Header() {
    return (
        <header>
            <div className="inner">
                <h1 style={{fontSize: '36px'}}>
                    {/* <Image
                        src={"/images/logo.png"}
                        width={140}
                        height={50}
                        alt="logo"
                    /> */}
                    💿
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
                <Link href={'/'}>노래신청</Link>
            </li>
            <li>
                <Link href={'/'}>매일노래</Link>
            </li>
        </ul>
    );
}