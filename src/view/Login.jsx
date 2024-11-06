import { Link } from "react-router-dom";
import Authentication from "./css/Authentication.module.css";
import Social from "./components/authentication/social";

function Login() {
    return(
        <div className={Authentication.container}>
            <form className={Authentication.formBox}>
                <h1>로 그 인</h1>
                <div className={Authentication.feild}>
                    <input  name="userId" type="text" placeholder="아이디"/>
                    <input  name="pwd" type="password" placeholder="password"/>
                </div>
                <div className={Authentication.submit}>
                    <div className={Authentication.link}>
                        <Link to={'/register'}>회원 가입</Link>
                        <Link to={'/'}>H O M E</Link>
                    </div>
                    <input type="submit" value={'로그인'}/>
                </div>
                
                <Social />
            </form>
        </div>
    );
}

export default Login;