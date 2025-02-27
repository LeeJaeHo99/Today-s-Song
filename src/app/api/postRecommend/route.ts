import { connectDB } from "@/util/mongodb";
import { ObjectId } from "mongodb"; 
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log('body: ', body);
        const { recommendTitle, recommendSinger } = body;

        if (!recommendTitle || !recommendSinger) {
            return NextResponse.json(
                { message: "제목과 가수를 입력하세요." },
                { status: 400 }
            );
        }

        const db = (await connectDB).db("todaysSong");
        const collection = db.collection("recommend");
        const newMusic = { recommendTitle, recommendSinger };

        const RECOMMEND_ID = process.env.NEXT_PUBLIC_RECOMMEND_COLLECTION_ID;
        const result = await collection.updateOne(
            { _id: new ObjectId (RECOMMEND_ID) },
            { $push: { recommendMusic: newMusic } }
        );

        return NextResponse.json({
            message: "성공적으로 저장되었습니다.",
            data: { recommendTitle, recommendSinger },
        });
    } catch (e) {
        return NextResponse.json(
            { message: "서버 오류 발생", error: e.message },
            { status: 500 }
        );
    }
}
