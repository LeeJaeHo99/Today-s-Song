"use client";

import { useState } from "react";

export default function Modal({
    handleRealSubmit,
    setShowModal,
}: {
    handleRealSubmit: () => void;
    setShowModal: (show: boolean) => void;
}) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleSubmit = () => {
        setIsSubmitted(true);
        handleRealSubmit();
    };

    return (
        <div className="modal blur-box">
            {isSubmitted && <p className="submit-complete">제출이 완료되었습니다.</p>}
            {!isSubmitted && (
                <div className="modal-content">
                    <p>정말 제출하시겠습니까?</p>
                    <div>
                        <button onClick={handleSubmit}>확인</button>
                        <button onClick={() => setShowModal(false)}>
                            취소
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
