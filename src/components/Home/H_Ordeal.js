import Title from "./H_Title";

import ORDEAL_STONE_L from "../../assets/im/ordeal_stone_l.png";
import ORDEAL_STONE_R from "../../assets/im/ordeal_stone_r.png";
import ORDEAL_GAME from "../../assets/im/ordeal_game.mp4";

export default function Ordeal() {
    return (
        <div className="ordeal" id="ordeal">
            <div className="content">
                <div className="left_img">
                    <img src={ORDEAL_STONE_L} alt="ORDEAL_STONE_L" />
                    <img src={ORDEAL_STONE_R} alt="ORDEAL_STONE_R" />
                </div>
                <div className="introduce">
                    <Title Title="部落的考驗來提升專注力" />
                    <div className="i_content">旅途中有許多能夠輔助專注力的解謎，透過解謎讓姊妹更強大吧！</div>
                    <video controls style={{ width: `49.79vw`,maxWidth:`716px`, marginTop: `20px` }}>
                        <source src={ORDEAL_GAME} type="video/mp4" />
                        您的瀏覽器不支援此 HTML5 影片標籤
                    </video>
                </div>
            </div>
        </div>
    );
}