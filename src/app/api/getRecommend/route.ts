import { NextResponse } from "next/server";
import { connectDB } from "@/util/mongodb";

export async function GET(){
    try{
        const db = (await connectDB).db('todaysSong');
        const collection = db.collection('recommend');
        const recommend = await collection.find({}).toArray();

        return NextResponse.json({
            success: true,
            data: recommend,
        });
    }
    catch(e){
        return NextResponse.json({
            success: false,
            error: e instanceof Error ? e.message : 'UnKnown Error',
        })
    }
}