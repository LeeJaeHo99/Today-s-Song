export default function WriteNotice() {
    return (
        <div className="write-notice">
            <h3>공지사항 작성</h3>
            <form action="">
                <label htmlFor="">
                    <span>제목</span>
                    <input name="notice-title" type="text" />
                </label>
                <label htmlFor="">
                    <span>글</span>
                    <input name="notice-text" type="text" />
                </label>
                <button type="submit">제출</button>
            </form>
        </div>
    );
}
