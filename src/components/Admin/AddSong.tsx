export default function Addsong() {
    return (
        <div className="add-song">
            <h3>노래추가</h3>
            <form action="">
                <label htmlFor="">
                    <span>낮</span>
                    <input name="morning-id" type="text" placeholder="videoId"/>
                    <input name="morning-title" type="text" placeholder="제목"/>
                    <input name="morning-singer" type="text" placeholder="가수"/>
                </label>
                <label htmlFor="">
                    <span>밤</span>
                    <input name="night-id" type="text" placeholder="videoId"/>
                    <input name="night-title" type="text" placeholder="제목"/>
                    <input name="night-singer" type="text" placeholder="가수"/>
                </label>
                <button type="submit">제출</button>
            </form>
        </div>
    );
}
