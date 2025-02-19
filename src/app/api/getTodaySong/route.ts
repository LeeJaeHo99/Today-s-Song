import { NextResponse } from "next/server";
import { connectDB } from "@/util/mongodb";

export async function GET(){
        try{
            const db = (await connectDB).db('todaysSong');
            const collection = db.collection('song');
            const song = await collection.find({}).toArray();

            return NextResponse.json({
                success: true,
                data: song,
            });
        }
        catch(e){
            return NextResponse.json({
                success: false,
                error: e instanceof Error ? e.message : 'UnKnown Error',
            })
        }
}