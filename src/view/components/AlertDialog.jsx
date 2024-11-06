import { useEffect } from "react";
import styles from "../css/alert/alert.module.css";

function AlertDialog(){
    
    return(
        <header id={styles.alertBackground} className={styles.alertParent}>
            <div id={styles.alertBackground} className={styles.alertBox}>
                <span className={styles.left_area}>Copied</span>
                <img className={styles.right_area} src="src/assets/icon/check.png" alt="체크"/>
            </div>
        </header>
    );
}


export default AlertDialog;