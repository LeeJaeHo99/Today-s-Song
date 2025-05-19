import Link from 'next/link';

interface linkProp{
    link: React.ReactNode;
}

export default function MoreViewBtn({link}: linkProp){
    return(
        <div className="more-view--btn__wrap">
            <Link className="more-view--btn" href={`/${link}`}>더보기</Link>
        </div>
    );
}