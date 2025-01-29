import Image from "next/image";

interface MusicThumnailProp{
    videoId: React.ReactNode;
    isPlaying: React.ReactNode;
}

export default function MusicThumbnail({ videoId, isPlaying }: MusicThumnailProp) {
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return (
        <Image
            className={`music-thumnail--img ${isPlaying ? `play` : `pause`}`}
            src={thumbnailUrl}
            width={480}
            height={480}
            alt="thumnail"
        />
    );
}
