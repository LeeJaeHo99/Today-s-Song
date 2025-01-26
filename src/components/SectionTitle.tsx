import { SectionTitleProp } from "../types/types";

export default function SectionTitle({ title }: SectionTitleProp) {
    return <h2 className="section-title">{title}</h2>;
}