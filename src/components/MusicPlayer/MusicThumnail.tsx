import Image from "next/image";

export default function MusicThumbnail({videoId}){
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    return(
        <Image className="music-thumnail--img" src={thumbnailUrl} width={720} height={460} alt="thumnail"/>
    );
}