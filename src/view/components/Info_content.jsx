import { useEffect, useRef } from "react";

function InfoContent(props){
    const infoContentRef = useRef(null);

    useEffect(() => {
        props.watch(infoContentRef.current.offsetTop);
    },[]);

    return(
        <div ref={infoContentRef} className="content-container">
            <div className="content-centeroid"> {/* 감싸는 layout */}
                <div className="left-content">
                    <h2>About Me</h2>
                    <ul className="left-content-box">
                        <li> <img src={"src/assets/icon/user.png"}/><span>김용해</span></li>
                        <li> <img src={"src/assets/icon/location.png"}/><span>인천광역시 남동구</span></li>
                        <li> <img src={"src/assets/icon/born.png"}/><span>00.10.19</span></li>
                        <li> <img src={"src/assets/icon/phone.png"}/><span>010-5065-9224</span></li>
                        <li> <img src={"src/assets/icon/email.png"}/><span>yoho1019@naver.com</span></li>
                        <li> <img src={"src/assets/icon/graducation.png"}/><span>동양미래대학교(정보통신과)</span></li>
                    </ul>
                </div>
                <div className="right-content">
                    <div className="my-img">
                        <img src="src\assets\face.jpg"/>
                    </div>
                    <p className="introduce">
                        안녕하세요 <br/>
                        문제 해결을 좋아하는 프론트 엔드 개발자<br/>
                        김용해입니다 :)
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InfoContent;