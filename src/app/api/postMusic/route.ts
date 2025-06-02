import { connectDB } from "@/util/mongodb";

export async function POST(){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getNewMusic`);
        const newMusic = await response.json();

        const db = (await connectDB).db("todaysSong");
        await db.collection("music").insertOne(newMusic);

        await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deleteNewMusic`, {
            method: "DELETE",
        });

        return new Response(JSON.stringify({ message: "노래 데이터가 추가되었습니다." }), {
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