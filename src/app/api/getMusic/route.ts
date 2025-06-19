import { NextResponse } from "next/server";
import { connectDB } from "@/util/mongodb";

export async function GET(request: Request) {
    try {
        const db = (await connectDB).db("todaysSong");
        const collection = db.collection("music");

        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get("page") || "1", 10);
        const limit = parseInt(searchParams.get("limit") || "10", 10);

        const skip = page === 1 ? 0 : 10 + (page - 2) * 5;

        const songs = await collection
            .find({})
            .sort({
                "date.year": -1,
                "date.month": -1,
                "date.day": -1,
                _id: -1,
            })
            .skip(skip)
            .limit(limit)
            .toArray();

        const totalCount = await collection.countDocuments({});
        const hasNextPage = skip + limit < totalCount;
        const nextPage = hasNextPage ? page + 1 : null;

        return NextResponse.json({
            success: true,
            data: songs,
            nextPage,
        });
    } catch (e) {
        return NextResponse.json({
            success: false,
            error: e instanceof Error ? e.message : "UnKnown Error",
        });
    }
}
