import { useEffect, useRef, useState } from "react";
import { data } from "../const/data";
import {prevScrollEvent, nextScrollEvent} from "../js/page_move.js";
import Card from "./project/Card.jsx";
import PrettyBox from "./prettyBox.jsx";

function Project(props) {

    const projectRef = useRef(null); // project의 offsetTop을 알아내기 위한 useRef
    useEffect(() => {
        const offset = projectRef.current.offsetTop; // offsetTop값을 가져옴.        
        
        // eslint-disable-next-line react/prop-types
        props.watch(offset); // 부모 Component 가 전달한 함수.

        // project-img 들의 className들을 정의 
    },[]);

    const classNamesImgFunction = (img_length) => {
        const list_number = Array.from({length : img_length}, (v="project-imgViewer-",i) => {
            return`${v}${i+1}`
        });
        console.log(list_number);
        
        // css 부여
        list_number.map((className, index) => {
            if(index == 0){
                console.log(className);
            }else {
                
            }
        });
    }
    //console.log(data);
    return (       
        <>
            {data.map((project, index) => {
                classNamesImgFunction(project.project_img.length);
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
                                    {
                                        project.project_img.map((imgPath, index) => {
                                            return <img  key={index} className={`project-imgViewer-${index}`} src={`src/assets/file_img/showinfo/${imgPath}.png`} alt="이미지"/>
                                        })
                                    }
                                    <nav className="project-nav">
                                        <div className="project-function">
                                            <button className="project-prevButton">P R E V</button>
                                            <button className="project-nextButton">N E X T</button>
                                        </div>
                                        <button className="project-visitButton">VISIT S I T E</button>
                                    </nav>

                                    <ul className="project-avatar-detail">
                                        <li>제로부터 만들어본 슬라이드 구현</li>
                                        <li>개발 언어 상세 이름 js 동작 구현</li>
                                        <li>제로부터 만들어본 간단한 스크롤 구현</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                );
            })}
        </>
    );
}


export default Project;
