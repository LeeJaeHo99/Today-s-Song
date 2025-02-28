import Image from "next/image";

export default function MainBg() {
    const videoId = 'occxYSeXSJE';
    const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div className="main-bg">
            <Image
                className={`music-thumbnail--img`}
                src={thumbnail}
                width={480}
                height={480}
                alt="thumbnail"
            />
        </div>
    );
}