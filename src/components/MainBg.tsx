import Image from "next/image";

export default function MainBg() {
    const videoId = '_fd_hwSm9zI';
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div className="main-bg">
            {/* <video src="/videos/winter-date.mp4" autoPlay muted loop></video> */}
            <Image
                className={`music-thumnail--img`}
                src={thumbnailUrl}
                width={480}
                height={480}
                alt="thumnail"
            />
        </div>
    );
}