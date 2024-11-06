import styles from "../css/componenetAllCSS.module.css"

function PrettyCircle(props) {
    const project = props.project;
    return(
        <div className={styles.projectArticleBoxDevice} style={!props.isDate ? {borderRadius : "0.5rem"} : null}>
            <div className={styles.prettyCircle}/>
            <h5 className={styles.projectArticleDevice}>{!props.isDate ? project.device : project.working_time}</h5>
        </div>
    )
}

export default PrettyCircle;