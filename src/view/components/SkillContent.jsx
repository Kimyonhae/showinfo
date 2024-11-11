import { useEffect, useRef } from "react";
import SkillCard from "./skill/SkillCard.jsx";

const skillObject = [
    {   
        "name" : "프론트",
        "data" : [
            "flutter.svg",
            "react.svg",
            "typescript.svg"
        ],
    },{   
        "name" : "백엔드",
        "data" : [
            "nodejs.svg",
            "mysql.svg",
            "django.svg",
            "sqlite.svg",
        ],
    },
    {   
        "name" : "언어",
        "data" : [
            "javascript.svg",
            "python.svg",
            "dart.svg",
            "java.svg",
        ],
    },
    {   
        "name" : "기타",
        "data" : [
            "githubs.svg",
            "vsc.svg",
            "docker.svg",
        ],
    },
]

function SkillContent(props) {
    const skillRef = useRef(null);

    useEffect(() => {
        props.watch(skillRef.current.offsetTop);
    },[]);
    return(
        <div ref={skillRef} className="skill-container">
            <div className="skill-centeroid">
                <h1>Skill</h1>
                <div className="skill-bottom">
                    {
                        skillObject.map((val, index) => {
                            return <SkillCard key={index} skill={val}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}


export default SkillContent;