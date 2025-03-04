import Image from "next/image";

export default function Review({ reviewInfo }) {
    const {userName, content, rate} = reviewInfo;

    return (
        <div className="review-component">
            <div className="rate-wrap">
                {Array.from({ length: rate }, (rate, i) => (
                    <Image
                        key={i}
                        className="rate"
                        src={"/icons/star.png"}
                        width={40}
                        height={40}
                        alt="star-icon"
                    />
                ))}
            </div>
            <div className="nickname">
                {/* - <span>{userName}</span> - */}
                - <span>userName</span> -
            </div>
            <div className="review-text">{content}</div>
        </div>
    );
}
