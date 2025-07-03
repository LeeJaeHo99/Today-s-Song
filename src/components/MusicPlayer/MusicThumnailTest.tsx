import Image from "next/image";

export default function MusicThumbnailTest() {
    const videoId = "dQw4w9WgXcQ";
    const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <div>
                <div className="thumbnail-container">
                    <Image
                        src={thumbnail}
                        width={480}
                        height={480}
                        alt=""
                        priority={false}
                        loading="lazy"
                        quality={75}
                    />
                </div>
        </div>
    );
}
