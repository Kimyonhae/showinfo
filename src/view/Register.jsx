import { Link } from "react-router-dom";
import Authentication from "./css/Authentication.module.css";

function Register() {
    return(
        <div className={Authentication.container}>
            <form className={Authentication.formBox}>
                <h1>회원 가입</h1>
                <div className={Authentication.registerFeild}>
                    <input  name="userId" type="text" placeholder="아이디"/>
                    <input  name="pwd" type="password" placeholder="비밀번호"/>
                    <input  name="confirm-password" type="" placeholder="비밀번호 확인"/>
                    <input  name="email" type="email" placeholder="이메일"/>
                    <input  name="userName" type="text" placeholder="이름"/>
                </div>
                <div className={Authentication.submit}>
                    <div className={Authentication.link}>
                        <Link to={'/login'}>로그인 돌아기기</Link>
                        <Link to={'/'}>H O M E</Link>
                    </div>
                    <input type="submit" value={'회원 가입'}/>
                </div>
            </form>
        </div>
    );
}

export default Register;