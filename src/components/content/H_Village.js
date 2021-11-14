import Title from "./H_Title";

import VILLAGE_MOSSINA from "../../assets/im/village_mossina.svg"
import VILLAGE_AFEITE from "../../assets/im/village_afeite.svg"
import VILLAGE_SCALE from "../../assets/im/village_scale.svg"
import VILLAGE_TAMA from "../../assets/im/village_tama.svg"
import VILLAGE_MOSSINA_BG from "../../assets/im/village_mossina_bg.png"
import VILLAGE_AFEITE_BG from "../../assets/im/village_afeite_bg.png"
import VILLAGE_SCALE_BG from "../../assets/im/village_scale_bg.png"
import VILLAGE_TAMA_BG from "../../assets/im/village_tama_bg.png"

export default function Village() {
    return (
        <div className="village" id="village">
            <Title Title="部落介紹" />
            <div className="content">
                <div className="logo" id="v_mossina">
                    <img src={VILLAGE_MOSSINA_BG} className="v_bg" alt="VILLAGE_MOSSINA_BG" />
                    <img src={VILLAGE_MOSSINA} className="v_logo v_mossina" alt="VILLAGE_MOSSINA" />
                    <div className="v_en v_mossina">MOSSINA</div>
                    <div className="v_in v_mossina">
                        被封印在神殿的神，陷入漫長的沉睡中，是所有信仰的起源。
                    </div>
                    <div className="v_ch v_mossina">魔森納</div>
                </div>
                <hr className="hr_column" id="v_hr0" />
                <div className="logo" id="v_scale">
                    <img src={VILLAGE_SCALE_BG} className="v_bg" alt="VILLAGE_SCALE" />
                    <img src={VILLAGE_SCALE} className="v_logo v_scale" alt="VILLAGE_SCALE" />
                    <div className="v_en v_scale">SCALE</div>
                    <div className="v_in v_scale">
                        傳說中受到神龍眷顧的民族，藍白色圓頂神殿為其主要特色。
                    </div>
                    <div className="v_ch VILLAGE_SCALE">斯克爾</div>
                </div>
                <hr className="hr_column" id="v_hr1" />
                <div className="logo" id="v_afeite">
                    <img src={VILLAGE_AFEITE_BG} className="v_bg" alt="VILLAGE_AFEITE" />
                    <img src={VILLAGE_AFEITE} className="v_logo v_afeite" alt="VILLAGE_AFEITE" />
                    <div className="v_en v_afeite">AFEITE</div>
                    <div className="v_in v_afeite">
                        居住在丘陵的特殊民族，體型高大魁武。大多為石製建築。
                    </div>
                    <div className="v_ch v_afeite">亞斐特</div>
                </div>
                <hr className="hr_column" id="v_hr2" />
                <div className="logo" id="v_tama">
                    <img src={VILLAGE_TAMA_BG} className="v_bg" alt="VILLAGE_TAMA" />
                    <img src={VILLAGE_TAMA} className="v_logo v_tama" alt="VILLAGE_TAMA" />
                    <div className="v_en v_tama">TAMA</div>
                    <div className="v_in v_tama">
                        藏身叢林的傳統民族，有特殊的靈紋裝飾。建築以草房為主。
                    </div>
                    <div className="v_ch v_tama">塔瑪</div>
                </div>
            </div>
        </div>
    );
}