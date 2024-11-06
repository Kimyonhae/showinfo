import InfoContent from "./Info_content";
import SkillContent from "./SkillContent";

function Content({watch}){
    
    return(
        <>
            <InfoContent watch={watch}/> {/* first components*/}
            <SkillContent watch={watch}/> {/* seconds components*/}
        </>
    );
}

export default Content;