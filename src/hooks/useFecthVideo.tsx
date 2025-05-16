import { useEffect, useState } from "react";

export const useFetchVideoId = () => {
    const [videoId, setVideoId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVideoId = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getVideoId`);
                if (!response.ok) {
                    throw new Error("응답 실패");
                }

                const result = await response.json();
                const latest = result.data[result.data.length - 1].videoId;
                setVideoId(latest);
            } 
            catch (e: unknown) {
                if (e instanceof Error) {
                    setError(e.message);
                }
            }
        };

        fetchVideoId();
    }, []);

    return { videoId, error };
};
