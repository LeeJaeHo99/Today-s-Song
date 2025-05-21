import Link from "next/link";

export default function TitleContent({ _id, title, date, comment}: {_id: string, title: string, date: string, comment?: string[]}) {
    return (
        <Link href={`/board/${_id}`} className="writing">
            <div className="title">
                <span>{title}</span>
                {comment && <div className="comment-num">[ {comment.length} ]</div>}
            </div>
            <div className="date">{date}</div>
        </Link>
    );
}