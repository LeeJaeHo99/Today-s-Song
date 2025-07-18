import { connectDB } from "@/util/mongodb";

export async function DELETE() {
    try {
        const db = (await connectDB).db("todaysSong");
        await db.collection("review").deleteMany({});
        return new Response(JSON.stringify({ message: "리뷰 컬렉션이 초기화되었습니다." }), {
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