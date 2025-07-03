import { connectDB } from "@/util/mongodb";
import { parsing } from "@/util/getArtist";
import { parsingData } from "@/data/data";
import { isoWeek } from "@/util/getWeekNum";

export async function POST(){
    try{
        const artist = await parsing(`${parsingData[isoWeek]}`);
        
        const db = (await connectDB).db("todaysSong");
        await db.collection("artist").insertOne(artist);


        return new Response(JSON.stringify({ message: "아티스트 데이터가 추가되었습니다." }), {
            status: 200,
        });
    } catch (error) {
        if(error instanceof Error) {
            return new Response(JSON.stringify({ message: error.message }), {
                status: 500,
            });
        }
    }
}