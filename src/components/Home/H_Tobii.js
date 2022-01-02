import TOBII_EYE from "../../assets/im/tobii_eye.svg";

export default function Tobii() {
    return (
        <div className="tobii" id="tobii">
            <div className="content">
                遊戲開始前，需要完成眼動儀的校正
            </div>
            <div className="content">
                利用Tobii眼動儀，一起探索部落的秘密
            </div>
            <img src={TOBII_EYE} alt="STORY_STAFF" />
            <div className="tobii_link">
                <a href="https://gaming.tobii.com/zh/home/" target="_blank" rel="noreferrer">Tobii 官網</a>
            </div>
        </div>
    );
}