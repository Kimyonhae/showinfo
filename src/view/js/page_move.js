export function nextScrollEvent(imgs, setImgIndex){
    setImgIndex(prevIndex => ((prevIndex + 1 ) % imgs.length));
}

export function prevScrollEvent(imgs, setImgIndex) { // 사진을 전 으로 옮기는 함수.
    setImgIndex((prevIndex) => ((prevIndex - 1 + imgs.length) % imgs.length))
}