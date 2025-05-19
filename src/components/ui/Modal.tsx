export default function Modal({handleRealSubmit, setShowModal}) {
    return (
        <div className="modal">
            <div className="modal-content">
                <p>정말 제출하시겠습니까?</p>
                <button onClick={handleRealSubmit}>확인</button>
                <button onClick={() => setShowModal(false)}>취소</button>
            </div>
        </div>
    );
}