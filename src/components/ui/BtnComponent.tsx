export default function BtnComponent({ onClick, type, text }) {
    return (
        <button className={`btn-component ${type}`} onClick={onClick}>
            {text}
        </button>
    );
}