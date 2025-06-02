import { connectDB } from "@/util/mongodb";

export async function GET(){
    try{
        const db = (await connectDB).db("todaysSong");
        const artist = await db.collection("artist").find({}).sort({ _id: -1 }).toArray();
        return new Response(JSON.stringify({ data: artist }), {
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