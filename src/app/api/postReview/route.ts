import { connectDB } from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { userName } = body;

        if (!userName) {
            return NextResponse.json(
                { message: "감상평을 입력하세요." },
                { status: 400 }
            );
        }

        const db = (await connectDB).db("todaysSong");
        const collection = db.collection("review");

        await collection.insertOne({ userName });

        return NextResponse.json({
            message: "성공적으로 저장되었습니다.",
            data: { userName },
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
