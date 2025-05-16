import { connectDB } from "@/util/mongodb";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const db = (await connectDB).db('todaysSong');
        const collection = db.collection('videoId');
        const videoId = await collection.find({}).toArray();

        return NextResponse.json({
            success: true,
            data: videoId,
        });
    }
    catch(e){
        return NextResponse.json({
            success: false,
            error: e instanceof Error ? e.message : 'Unknown Error',
        })
    }
}