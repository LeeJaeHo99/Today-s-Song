import Image from "next/image";

export default function MusicHistory() {
    return (
        <div className="music-history--component">
            <div className="rate-wrap">
                <Image src={'/icons/star.png'} width={20} height={20} alt="star"/>
                <Image src={'/icons/star.png'} width={20} height={20} alt="star"/>
            </div>
            <Image
                className="music-thumnail"
                src={"/images/music-history/fuz2F8GGQKI.webp"}
                width={480}
                height={480}
                alt="music-thumnail"
            />
            <div className="music-desc">
                <div className="title">거리에서</div>
                <div className="singer">Leellamarz</div>
            </div>
        </div>
    );
}
