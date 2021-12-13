import Title from "./G_Title";

import BG from "../../assets/im/world_bg.png";

export default function World() {
    return (
        <div className="world" id="world">
            <img src={BG} alt="ARROW_L" />
            <Title Title_top="神與信仰的起源" Title_bottom="WORLDVIEW" ls="39" lss="20" />
            <div className="content">三個帶有信仰能力的神祕部落居住在大陸的不同地方，根據傳說記載，他們獲得神的祝福，分別是斯克爾都、亞斐特城、塔瑪部落。</div>
        </div>
    );
}