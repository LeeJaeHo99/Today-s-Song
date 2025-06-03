import { ScaleLoader } from "react-spinners";

export default function Spinner() {
    return (
    <div
        style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }}
    >
        <ScaleLoader color="#a5a5a5" height={32} width={5} radius={5} />
    </div>

    )
}
