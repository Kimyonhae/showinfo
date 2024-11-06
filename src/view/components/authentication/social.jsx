import Authentication from "../../css/Authentication.module.css";


function Social() {
    return(
        <div className={Authentication.social_login_form}>
            <div>
                <img src="src/assets/social/github.svg" alt="github"/>
                <span>Github</span>
            </div>
            <div>
                <img src="src/assets/social/google.svg"/>
                <span>Google</span>
            </div>
            <div>
                <img src="src/assets/social/naver.png"/>
                <span>Naver</span>
            </div>
        </div>
        
    );
}

export default Social;