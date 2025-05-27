export default function Modal({
    handleRealSubmit,
    setShowModal,
}: {
    handleRealSubmit: () => void;
    setShowModal: (show: boolean) => void;
}) {
    return (
        <div className="modal blur-box">
            <div className="modal-content">
                <p>정말 제출하시겠습니까?</p>
                <div>
                    <button onClick={handleRealSubmit}>확인</button>
                    <button onClick={() => setShowModal(false)}>취소</button>
                </div>
            </div>
        </div>
    );
}
