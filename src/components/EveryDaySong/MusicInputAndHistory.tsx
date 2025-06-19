"use client";

import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import SelectMonthInput from "./SelectMonthInput";
import SongHistory from "./SongHistory";
import Spinner from "../spinner/Spinner";
import NoneMusic from "./NoneMusic";

export default function MusicInputAndHistory() {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ["music"],
        queryFn: async ({ pageParam = 1 }) => {
            const limit = pageParam === 1 ? 10 : 5;
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getMusic?page=${pageParam}&limit=${limit}`);
            const result = await res.json();
            return {
                data: result.data,
                nextCursor: result.nextPage,
            };
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    });

    const allMusic = data?.pages.flatMap((page) => page.data) ?? [];
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

    if (status === "pending") return <Spinner />;
    if (status === "error") return <NoneMusic />;
    if (status === "success") return (
        <>
            <SelectMonthInput />
            <SongHistory music={allMusic} />
            {isFetchingNextPage && <Spinner />}

            <div ref={ref} style={{ height: 1 }} />
        </>
    );
}
