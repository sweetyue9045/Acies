import Title from "./H_Title";

import CRISIS_BEAR from "../../assets/im/crisis_bear.png"
import CRISIS_BOSS from "../../assets/im/crisis_BOSS.mp4";

export default function Crisis() {
    return (
        <div className="crisis" id="crisis">
            <div className="content">
                <div className="introduce">
                    <Title Title="利用專注力解決危機吧！" />
                    <div className="i_content">遇上各式各樣的神奇生物時，冷靜下來觀察周遭，利用技能解決難題吧！</div>
                    <video controls style={{ width: `49.79vw`, marginTop: `20px` }}>
                        <source src={CRISIS_BOSS} type="video/mp4" />
                        您的瀏覽器不支援此 HTML5 影片標籤
                    </video>
                </div>
                <img src={CRISIS_BEAR} alt="ORDEAL_STONE_L" className="crisis_bear" />
            </div>
        </div>
    );
}