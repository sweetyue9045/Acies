import TOBBI_EYE from "../../assets/im/tobbi_eye.svg"


export default function Tobbi() {
    return (
        <div className="tobbi">
            <div className="content">
                遊戲開始前，需要完成眼動儀的校正<br />利用tobii眼動儀，一起探索部落的秘密
            </div>
            <img src={TOBBI_EYE} alt="STORY_STAFF" />
            <div>
                <a class="tobbi_link" target="_blank">Tobbi 官網</a>
                </div>

        </div>
    );
}