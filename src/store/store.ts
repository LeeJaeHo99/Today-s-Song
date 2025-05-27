import { create } from "zustand";
import { VideoIdType, SelectedDateType } from "@/types/types";

export const useVideoId = create<VideoIdType>((set) => ({
    videoId: "VALUE",
    setVideoId: (id: string) => set(() => ({ videoId: id })),
}));


const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

export const useSelectedDate = create<SelectedDateType>((set) => ({
    selectedDate: `${year}-${month}`,
    setSelectedDate: (date) => set(() => ({selectedDate: date})),
}));


export const useTablePagination = create((set) => ({
    pagination: 0,
    setPagination: (page: number) => set({pagination: page}),
}));