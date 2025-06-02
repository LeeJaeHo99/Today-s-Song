import { connectDB } from "@/util/mongodb";

export async function GET(){
    try{
        const db = (await connectDB).db("todaysSong");
        const newMusic = await db.collection('newMusic').findOne({}, { sort: { _id: 1 } });
        return new Response(JSON.stringify(newMusic), {
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