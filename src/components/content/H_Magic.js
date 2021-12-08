import Title from "./H_Title";

import MAGIC_SIS from "../../assets/im/magic_sis.png"
import BLOCK from "../../assets/im/block.png"


export default function Magic() {
    return (
        <div className="magic" id="magic">
            <div className="content">
                <div className="introduce">
                    <Title Title="姐妹一起，透過專注力" />
                    <Title Title="來施展魔法" />
                    <img src={BLOCK} alt="BLOCK" className="BLOCK" />
                    <div className="block_title">
                        <div className="left">
                            <div className="num">01</div>
                            <div className="text">凝聚之光</div>
                        </div>
                        <div className="right">
                            <div className="r_prev"></div>
                            <div className="r_next"></div>
                        </div>
                    </div>
                </div>
                <img src={MAGIC_SIS} alt="MAGIC_SIS" className="magic_sis" />
            </div>
        </div>
    );
}