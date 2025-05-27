import WriteNotice from '@/components/Admin/WriteNotice';
import Addsong from '@/components/Admin/AddSong';
import UserInfo from '@/components/Admin/UserInfo';

export default function adminPage(){
    return(
        <div className="admin-page sub-page--wrap">
            <div className="inner">
                <WriteNotice/>
                <Addsong/>
                <UserInfo/>
            </div>
        </div>
    );
}

// 공지사항 쓰기
// 노래 추가 ()
// 노래 정보