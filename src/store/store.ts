import { create } from "zustand";

interface VideoIdType {
    videoId: string;
    setVideoId: (id: string) => void;
}
export const useVideoId = create<VideoIdType>((set) => ({
    videoId: "VALUE",
    setVideoId: (id: string) => set(() => ({ videoId: id })),
}));