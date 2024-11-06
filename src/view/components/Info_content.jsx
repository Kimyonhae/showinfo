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
                    <h2>Portfolio Info App</h2>
                    <ul className="left-content-box">
                        <li>프로젝트 의견을 주세요.</li>
                        <li>Project Web, App 소개 사이트 입니다.</li>
                        <li> 위의 메뉴 스크롤을 통해 확인 할 수 있습니다.</li>
                    </ul>
                </div>
                <div className="right-content">
                    <div className="my-img">
                        <img src="src\assets\face.jpg"/>
                    </div>
                    <ul>
                        <li>이름 : 김용해</li>
                        <li>Email : yoho1019@naver.com</li>
                        <li>TEL : 010-5065-9224</li>
                    </ul>
                    <p>
                        문제 해결을 잘 하는 개발자로 성장하고 싶어하는 재능 1% 노력 99% 개발자입니다.<br/> 
                        Web 과 App 개발자로서 다양한 프로젝트와 기술에 대한 열정을 가지고 있으며<br/> 
                        주로 Front 를 다루지만 BackEnd를 알아야 Front를 잘 할 수 있다고 생각합니다.<br/>
                        그러므로 저는 FullStack을 목표로 지향하고 있습니다.<br/>
                        귀사의 다양한 프로젝트에 기여하며 함께 성장해 나가길 희망합니다.
                    </p>
                    <p>감사합니다.</p>
                </div>
            </div>
        </div>
    );
}

export default InfoContent;