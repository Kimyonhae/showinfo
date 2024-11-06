import { useEffect, useRef, useState } from "react";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Project from "./components/Project.jsx";



function App() {
  const initPage = useRef(0); // 초기 페이지
  const [scrolls,SetScrolls] = useState([]); // 각각의 태그들의 ref값을(offsetTop) 모아서 배열로 만듬.
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [alertClick, setAlertClick] = useState(false);

  const resizeEvent = () => { /*resize이벤트 핸들러입니다.  */
    setCurrentWidth(window.innerWidth);
  }

  const watchingScroll = (offset) => {
    SetScrolls((prevOffset) => [...prevOffset,offset]);
  };
  
  useEffect(() => { // 화면의 너비 변화 감시함.
    window.addEventListener("resize",resizeEvent);

    return () => {
      window.removeEventListener("resize",resizeEvent);
    }
  },[currentWidth]);

  // Header에게서 useState값 가져오기
  const deliveryHeaderProps = (page) => {
    initPage.current = page;
  }
  return(
    <>
      <Header pageDelivery={deliveryHeaderProps}  watch={watchingScroll}/> {/*  Header 영역의 Layout 입니다. */}
      <Content watch={watchingScroll}/> {/*  main 내용이 들어갈 영역의 Layout 입니다. */}
      <Project  watch={watchingScroll}/>
      {/* <Career />  나중을 위한 경력을 만듭시다.*/}
      <Footer watch={watchingScroll}/> {/*  Footer 영역의 Layout 입니다. */}
    </>
  );
}

export default App;
