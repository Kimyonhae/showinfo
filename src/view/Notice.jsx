import CustomBottom from "./components/CustomBottom";
import CustomInput from "./components/CustomInput";
import styles from "./css/notice.module.css";
import {Link} from "react-router-dom";

function Notice() {
    return(
        <div className={styles.notice_container}>
            <form className={styles.notice_centeroid}>
                <label className={styles.img_selector} htmlFor="file_search">
                    <img src="/src/assets/icon/photo.png" alt="camera-icon"/>
                </label>
                <input className={styles.file_search} id="file_search" type="file"/>

                <CustomInput message={"Github URL"} title={"Github Url"}/>
                <CustomInput message={"WebSite URL"} title={'URL'}/>
                <CustomInput message={"FrontEnd 사용 기술을 적어주세요"} title={"FrontEnd"}/>
                <CustomInput message={"BackEnd 사용 기술을 적어주세요"} title={"BackEnd"}/>
                <CustomInput message={"DB 사용 기술을 적어주세요"} title={"Database"}/>
                <CustomInput message={"배포 방법을 적어주세요"} title={"Deployment"}/>
                <CustomBottom />
                <Link to="/">
                    <img className={styles.back_icon} src="/src/assets/icon/back.png" alt="뒤로가기"/>
                </Link>
            </form>
        </div>
    );
}


export default Notice;