function CustomBottom() {
    return(
        <div>
            <p>Device 종류</p>
            <input type="radio" name="device" value="Iphone"/><span>Iphone</span>
            <input type="radio" name="device" value="MacBook"/><span>MacBook</span>
            <label>본문</label>
            <textarea placeholder="메인 본문입니다."/>
        </div>
    );
}

export default CustomBottom;