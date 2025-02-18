import Link from 'next/link';

export default function MoreViewBtn({link}){
    return(
        <div className="more-view--btn__wrap">
            <Link className="more-view--btn" href={`/${link}`}>더보기</Link>
        </div>
    );
}