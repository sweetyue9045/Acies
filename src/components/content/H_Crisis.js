import Title from "./H_Title";

import CRISIS_BEAR from "../../assets/im/crisis_bear.png"
import BLOCK from "../../assets/im/block.png"


export default function Crisis() {
    return (
        <div className="crisis" id="crisis">
            <div className="introduce">
                <Title Title="利用專注力解決危機吧！" />
                <div className="content">遇上各式各樣的神奇生物時，冷靜下來觀察周遭，利用技能解決難題吧！</div>
                <img src={BLOCK} alt="BLOCK" className="BLOCK" />
            </div>
            <img src={CRISIS_BEAR} alt="ORDEAL_STONE_L" className="crisis_bear"/>
        </div>
    );
}