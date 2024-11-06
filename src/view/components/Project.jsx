import { useEffect, useRef, useState } from "react";
import { data } from "../const/data";
import {prevScrollEvent, nextScrollEvent} from "../js/page_move.js";
import Card from "./project/Card.jsx";
import PrettyBox from "./prettyBox.jsx";

function Project(props) {

    const projectRef = useRef(null); // project의 offsetTop을 알아내기 위한 useRef

    const [pageMove , setPageMove] = useState(0);

    useEffect(() => {
        const offset = projectRef.current.offsetTop; // offsetTop값을 가져옴.        
        
        // eslint-disable-next-line react/prop-types
        props.watch(offset); // 부모 Component 가 전달한 함수.
    },[]);
    
    return (
        <>
            {data.map((project, index) => {
                console.log(project);
                return(
                        <div key={index} ref={projectRef} className="project-container">
                            <div className="project-centeroid">
                                <article className="project-article">
                                    <div className="project-article-info">
                                        <PrettyBox isDate={false} project={project}/>
                                        <PrettyBox isDate={true} project={project}/>
                                    </div>
                                    <h3 className="project-article-title">{project.title}</h3>
                                    <p className="project-article-content">{project.summary}</p>
                                    <ul className="project-article-detail">
                                        {/* <a href="https://www.flaticon.com/kr/free-icons/-" title="클립 보드 붙여 넣기 아이콘">클립 보드 붙여 넣기 아이콘 제작자: Anggara - Flaticon</a> */}
                                        {
                                            project.url_link.map((link,index) => {     
                                                return(
                                                    <li key={index}>
                                                        {
                                                            link.isUrl ? <Card cardImg={link.urlImg} isUrl={link.isUrl} cardName={link.subject} url={link.URL}/> // url 전용 Card
                                                            : <Card isUrl={link.isUrl} cardName={link.subject} skill={link.skill}/> // 프론트 , 벡엔드 Card
                                                        }
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </article>
                                <div className="project-content">
                                    <img className="project-imgViewer" src="src/assets/file_img/showinfo/test3.png" alt="이미지"/>
                                    <button className="project-prevButton">P R E V</button>
                                    <button className="project-nextButton">N E X T</button>

                                    <ul className="project-avatar-detail">
                                        <li>제로부터 만들어본 슬라이드 구현</li>
                                        <li>개발 언어 상세 이름 js 동작 구현</li>
                                        <li>제로부터 만들어본 간단한 스크롤 구현</li>
                                    </ul>
                                    <button className="project-visitButton">VISIT S I T E</button>
                                </div>
                            </div>
                        </div>
                )
            })}
        </>
    );
}


export default Project;
