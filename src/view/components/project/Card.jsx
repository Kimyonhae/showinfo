import { useEffect, useState } from 'react';
import styles from '../../css/project/card.module.css';
import AlertDialog from "../AlertDialog";


function Card(props) {
    const [alertState , setAlertState] = useState(false);

     async function showCopyBox(url){  // copy를 하면 1초 뒤에 사라지게 할거임.
            if(!alertState){
                setAlertState(true);  
                await navigator.clipboard.writeText(url);
                
                setTimeout(() => {
                    setAlertState(false);
                }, 1000);
            }else {
                console.log("막힘!!!");
            }

    }
    return(
        
        <>
        {
            props.isUrl ? 
            <div className={styles.project_article_card}>
                <img className={styles.project_article_card_img} src={props.cardImg}/>
                <div className={styles.cardInfoBox}>
                    <div className={styles.CardTitleBox}>
                        <strong id={styles.Card} className={styles.CardTop}>{props.cardName}</strong>
                        <img onClick={() => showCopyBox(props.url)} className={styles.Card_img} src="src/assets/icon/link.png" alt="null"/>
                    </div>
                    <span id={styles.Card} className={styles.CardBottom}>
                        {props.url} 
                    </span>
                </div>
            </div> : 
            <div className={styles.project_article_card}>
                <strong id={styles.Card} className={styles.skillCardName}>{props.cardName}</strong>
                <div id={styles.Card} className={styles.CardBottomNotUrl}>
                {
                    props.skill == 0 ? 
                    <span className={styles.none_skill}> {/* stack이 아무것도 없는 경우! */}
                        ❌
                    </span> :
                    props.skill.map((stack, index) => 
                            <img className={styles.skillImg} key={index} src={`src/assets/icon/${stack}`} alt={stack}/> 
                    )
                }
                </div>
            </div>
        }
            {/* 버그가 있음  state를 넘겨주면서 alertState가 false가 되어야 하는데 
            True일때만 존재해만 false를 넘겨줄수가 없음.*/}
            {alertState ? <AlertDialog />   : null}
            {/* True가 되면 alert 박스가 나올 거임. */}
        </>
    );
}

export default Card;



/*
    초기에 alertState - > false
    초기에 notAnimation - > false

    rendering이 다 된 후 alertState는 true가 되며 
    notAnimation 또한 rendering이 다 된후 true

    둘다 true true 상태 이므로 자식 컴포넌트 에게 alertState 값을 전달할 수 있다.


    여기서부터가 문제임.. 
    notAnimation도 setTimeout에서 false가 된다면...? 한번 해보자!!

*/