import { useEffect, useRef } from "react";

function Footer(props){
    const footerRef = useRef(null);

    useEffect(() => {
        props.watch(footerRef.current.offsetTop);
    },[]);
    return(
        <div ref={footerRef} className="footer-container">
            <div className="footer-svg">
                <a href="https://github.com/Kimyonhae?tab=repositories" target="_blank">
                    <img src="src/assets/icon/githubs.svg" alt="githubs.svg"/>
                </a>
            </div>

            <span>
                &copy; {new Date().getFullYear()}. Y O N G All rights Reserved.
            </span>
        </div>
    );
}

export default Footer;