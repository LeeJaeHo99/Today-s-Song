import Image from "next/image";

export default function Review() {
    return (
        <div className="review-component">
            <div className="rate-wrap">
                <Image
                    className="rate"
                    src={"/icons/star.png"}
                    width={40}
                    height={40}
                    alt="star-icon"
                />
                <Image
                    className="rate"
                    src={"/icons/star.png"}
                    width={40}
                    height={40}
                    alt="star-icon"
                />
                <Image
                    className="rate"
                    src={"/icons/star.png"}
                    width={40}
                    height={40}
                    alt="star-icon"
                />
                <Image
                    className="rate"
                    src={"/icons/star.png"}
                    width={40}
                    height={40}
                    alt="star-icon"
                />
                <Image
                    className="rate"
                    src={"/icons/star.png"}
                    width={40}
                    height={40}
                    alt="star-icon"
                />
            </div>
            <div className="nickname">- <span>이재호</span> -</div>
            <div className="review-text">
                그대에게 그대에게 그대에게 그대에게 그대에게 그대에게 그대에게 그대에게 그대에게 그대에게 그대에게 그대에게 그대에게
            </div>
        </div>
    );
}
