function SkillCard(props) {


    // imgBox에 마우스 Hover 이벤트 함수.
    const hoverEvent = (event, className) => {

        // 마우스가 올라간 박스를 의미함.
        const imgBox = document.querySelector(`div.${className}`);

        const noticeBox = document.createElement('div'); // div 생성

        noticeBox.classList.remove("notice-box-out"); // fade-out css 삭제
        noticeBox.classList.add("notice-box-in"); // class fade-in 부여
        
        noticeBox.textContent = className; // 뒤의 .svg 부분을 삭제함.

        // 위치 조정
        imgBox.appendChild(noticeBox); 

        // 마우스가 이미지에서 벗어날 때 noticeBox 제거
        event.target.onmouseleave = () => {
            // 이렇게 해야 css 적용이 됨.
            noticeBox.classList.remove("notice-box-in"); // class fade-in 삭제
            noticeBox.classList.add("notice-box-out"); // fade-out css 부여

            noticeBox.addEventListener("animationend",() => {
                noticeBox.remove();
            });
        };
    }

    return(
        <div className="skill-box">
            <p>{props.skill.name}</p>
            <div className="skill-content">
                {props.skill.data.map((val, index) => {
                    console.log(val.slice(0,-4));
                   const className = val.slice(0,-4); 
                   return(
                    <div key={index} id="imgBox" className={className}>
                        <img onMouseOver={(event) => hoverEvent(event, className)} src={`src/assets/icon/${val}`}  alt={val}/>
                    </div>
                   ); 
                })}
            </div>
        </div>
    );
}

export default SkillCard;


