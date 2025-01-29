import Link from 'next/link';

export default function MoreViewBtn(){
    return(
        <div className="more-view--btn__wrap">
            <Link className="more-view--btn" href={'/'}>더보기</Link>
        </div>
    );
}