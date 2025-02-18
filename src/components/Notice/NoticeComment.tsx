'use client';

import { noticeData } from "@/data/data";
import { usePathname } from "next/navigation";

export default function NoticeComment(){
    const data = noticeData;
    console.log('data: ', data);
    const pathName = usePathname();
    const pathNum = pathName?.split('/')?.[2];
    console.log('pathNum: ', pathNum);

    return(
        <div>
            <h3>{data[pathNum - 1].title}</h3>
            123
        </div>
    );
}