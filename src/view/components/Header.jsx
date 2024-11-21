import { useEffect, useRef, useState } from "react";

function Header(props){

    const headerRef = useRef(null);
    const [locations , setLocations] = useState([]);

    const moveScroll = (index) => {

        window.scrollTo({
            top : locations[index],
            behavior : "smooth",
        });

    };

    useEffect(() => {
        props.watch(headerRef.current.offsetTop);
    
        let sum = 0;
        const rootElement = document.querySelector("div#root");
        const rootInnerChildren = Array.from(rootElement.children);
    
        const newLocations = []; // 임시 배열에 위치 값을 누적 저장
    
        rootInnerChildren.forEach((child) => {
            sum += child.clientHeight;
            newLocations.push(sum); 
        });
    
        setLocations(newLocations); // 한 번에 상태 업데이트
    }, [
        window.matchMedia("(max-width: 1100px)").matches,
        window.matchMedia("(max-width: 1000px)").matches,
        window.matchMedia("(max-width: 800px)").matches,
        window.matchMedia("(max-width: 600px)").matches,
        window.matchMedia("(max-width: 500px)").matches,
    ]);

    return(
        <header ref={headerRef} className="header-container">
            <div className="header-centeroid">
                <div className="header-logo">
                    <a href="/"><img className="header-logo-img" src="src\assets\logo.png"/></a>
                </div>
                <ul className="header-center">    {/* 중앙 Header 내용 */}
                    <li onClick={() => moveScroll(0)}>H O M E</li>
                    <li onClick={() => moveScroll(1)}>S K I L L</li>
                    <li onClick={() => moveScroll(2)}>P R O J E C T</li>
                </ul>
                
            </div>
        </header>
    );
}


export default Header;