import { connectDB } from '@/util/mongodb';

export async function DELETE() {
    try {
        const db = (await connectDB).db("todaysSong");

        const oldestDoc = await db.collection("newMusic")
            .find({})
            .sort({ 'date.year': 1, 'date.month': 1, 'date.day': 1 })
            .limit(1)
            .toArray();

        if (oldestDoc.length === 0) {
            return new Response(JSON.stringify({ message: "삭제할 데이터가 없습니다." }), { status: 404 });
        }

        const oldestId = oldestDoc[0]._id;

        await db.collection("newMusic").deleteOne({ _id: oldestId });

        return new Response(JSON.stringify({ message: "노래 데이터가 삭제되었습니다." }), {
            status: 200,
        });
    } catch (error) {
        if (error instanceof Error) {
            return new Response(JSON.stringify({ message: error.message }), {
                status: 500,
            });
        }
    }
}