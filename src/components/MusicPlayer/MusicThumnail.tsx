import Image from "next/image";

export default function MusicThumbnail({videoId}){
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return(
        <Image className="music-thumnail--img" src={thumbnailUrl} width={600} height={400} alt="thumnail"/>
    );
}