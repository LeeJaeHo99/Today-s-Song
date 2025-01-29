import Image from 'next/image';

export default function MusicRecommend() {
    return (
        <>
            <form className="music-recommend--component" action="">
                <div>
                    <label htmlFor="recommend-title">
                        <span>제목</span>
                        <input
                            id="recommend-title"
                            type="text"
                            placeholder="제목을 입력해주세요."
                        />
                    </label>
                    <label htmlFor="recommend-singer">
                        <span>가수</span>
                        <input
                            id="recommend-singer"
                            type="text"
                            placeholder="가수를 입력해주세요."
                        />
                    </label>
                </div>
            </form>
            <button className="music-recommend-submit--btn" type="button">
                <span>제출하기</span>
                <Image src={'/icons/arrow.png'} width={20} height={20} alt='arrow-icon'/>
            </button>
        </>
    );
}
