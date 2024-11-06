import { useEffect, useRef, useState } from "react";

function Header(props){

    const headerRef = useRef(null);
    const [count,SetCount] = useState(0);
    
    const moveScrollHome = (height,index) => {

        SetCount(index); // 상태 업데이트

        window.scrollTo({
            top : height,
            behavior : "smooth",
        });

        props.pageDelivery(count); // count 값을 부모에게 전달.
    };

    useEffect(() => {
        props.pageDelivery(count); // count 값을 부모에게 전달.
    },[count]);

    useEffect(() => {
        props.watch(headerRef.current.offsetTop);
    },[]);

    return(
        <header ref={headerRef} className="header-container">
            <div className="header-centeroid">
                <div className="header-logo">
                    <a href="/"><img className="header-logo-img" src="src\assets\logo.png"/></a>
                </div>
                <ul className="header-center">    {/* 중앙 Header 내용 */}
                    <li onClick={() => moveScrollHome(0,0)}>H O M E</li>
                    <li onClick={() => moveScrollHome(700,2)}>S K I L L</li>
                    <li onClick={() => moveScrollHome(1400,3)}>P R O J E C T</li>
                    <li onClick={() => moveScrollHome(2240,0)}>L A S T</li> {/* 커리어가 생기면 넣을 생각임 */}
                </ul>
                {/* 
                    <div className="header-right">
                        <Link to={"login"}>로 그 인</Link>
                        <Link to={"register"}>회 원 가 입</Link>
                    </div> 
                */}
            </div>
        </header>
    );
}


export default Header;