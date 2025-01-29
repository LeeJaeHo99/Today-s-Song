import Link from 'next/link';

export default function Header() {
    return (
        <header>
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
                <Link href={'/'}>노래신청</Link>
            </li>
            <li>
                <Link href={'/'}>매일노래</Link>
            </li>
        </ul>
    );
}