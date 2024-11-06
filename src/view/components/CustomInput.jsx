/* eslint-disable react/prop-types */
import styles from "../css/notice.module.css";

function CustomInput(props) {
    return(
        <div className={styles.custom_input}>
            <label>{props.title}</label>
            <input type="text" placeholder={props.message}/>
        </div>
    );
}

export default CustomInput;CustomInput