import Image from "next/image";

export default async function MainBg() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getVideoId`);
    if(!response.ok){
        return <div>오류가 발생했습니다...</div>
    }
    const result = await response.json();
    const videoId = result.data[result.data.length - 1].videoId;
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