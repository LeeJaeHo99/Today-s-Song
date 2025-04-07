import LoginComponent from '@/components/login/LoginComponent';
import SectionTitle from '@/components/SectionTitle';

export default function AuthPage(){
    return(
        <div className="auth-page sub-page--wrap">
            <div className="inner">
                <SectionTitle title={"로그인"} />
                <LoginComponent/>
            </div>
        </div>
    );
}