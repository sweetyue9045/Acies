import Title from "./H_Title";

import ORDEAL_STONE_L from "../../assets/im/ordeal_stone_l.png"
import ORDEAL_STONE_R from "../../assets/im/ordeal_stone_r.png"
import BLOCK from "../../assets/im/block.png"


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
                    <img src={BLOCK} alt="BLOCK" className="BLOCK" />
                </div>
            </div>
        </div>
    );
}