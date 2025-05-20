'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import MusicThumbnail from "./MusicThumnail";
import Link from "next/link";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const videoIds = [
    {
        id: 1,
        videoId: "P5eFbRSqy7E",
        tag: ["새벽", "감성", "인디"],
    },
    {
        id: 2,
        videoId: "c_l1ZwJbAnc",
        tag: ["비", "편안", "밴드"],
    },
    {
        id: 3,
        videoId: "VtJ_2SbYoIM",
        tag: ["힙합", "R&B", "카페",],
    },
    {
        id: 4,
        videoId: "uiTNi2ZO89U",
        tag: ["겨울", "힙합", "발라드"],
    },
    {
        id: 5,
        videoId: "M_f_pKo4S10",
        tag: ["여름", "밴드", "시원"],
    },
    {
        id: 6,
        videoId: "mC0JUlb7B_A",
        tag: ["밤", "퇴근길", "감성"],
    },
    {
        id: 7,
        videoId: "MGcU7RjUMnY",
        tag: ["드라이브", "노을", "여행",],
    },
    {
        id: 8,
        videoId: "0eyvWdgx_gk",
        tag: ["가을", "인디", "자연"],
    },
    // M_f_pKo4S10
];

export default function PlayList() {

    return (
        <div className="play-list--wrap">
            <Swiper
                slidesPerView={4}
                spaceBetween={39}
                modules={[Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: true }}
            >
            {videoIds.map((video) => {
                return (
                    <SwiperSlide key={video.id}>
                        <div className="play-list blur-box">
                            <Link 
                                href={`https://www.youtube.com/watch?v=${video.videoId}`}
                                target="_blank"
                                className="play-list--link">
                                <MusicThumbnail videoId={video.videoId} />
                            <div className="tag-wrap">
                                {video.tag.map((tag, i) => <div key={i} className="tag"># {tag}</div>)}
                            </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                );
            })}
            </Swiper>
        </div>
    );
}
