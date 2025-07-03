import { SongData } from "@/types/types";

export default function MusicDesc({
    isLoading,
    songData,
}: {
    isLoading: boolean;
    songData: Partial<SongData>;
}) {
    if (isLoading) return <div></div>;

    return (
        <div className="music-desc--wrap">
            <ul className="music-desc">
                <li>
                    <div className="title view">{songData?.title ?? ""}</div>
                </li>
                <li>
                    <div className="singer view">{songData?.singer ?? ""}</div>
                </li>
            </ul>
        </div>
    );
}
