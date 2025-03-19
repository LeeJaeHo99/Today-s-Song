import { create } from "zustand";

interface VideoIdType {
    videoId: string;
    setVideoId: (id: string) => void;
}
export const useVideoId = create<VideoIdType>((set) => ({
    videoId: "VALUE",
    setVideoId: (id: string) => set(() => ({ videoId: id })),
}));


interface SelectedDateType{
    selectedDate: string;
    setSelectedDate: (date: string) => void
}
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;

export const useSelectedDate = create<SelectedDateType>((set) => ({

    selectedDate: `${year}-${month}`,
    setSelectedDate: (date) => set(() => ({selectedDate: date})),
}));

export const useTablePagination = create((set) => ({
    pagination: 0,
    setPagination: (page) => set({pagination: page}),
}))