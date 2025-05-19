import { connectDB } from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userName, content } = body;

        if (!userName || !content) {
            return NextResponse.json(
                { message: "제목과 가수를 입력하세요." },
                { status: 400 }
            );
        }

        const db = (await connectDB).db("todaysSong");
        const collection = db.collection("review");

        await collection.insertOne(
            {     
                userName,
                content,
            }
        );

        return NextResponse.json({
            message: "성공적으로 저장되었습니다.",
            data: { userName, content },
        });
    } catch (e: unknown) {
        if (e instanceof Error) {
            return NextResponse.json(
                { message: "서버 오류 발생", error: e.message },
                { status: 500 }
            );
        }
    }
}
