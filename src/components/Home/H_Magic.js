import Title from "./H_Title";

import MAGIC_SIS from "../../assets/im/magic_sis.png"
import MAGIC_X from "../../assets/im/magic_X_btn.mp4";
import MAGIC_Y from "../../assets/im/magic_Y_btn.mp4";

import { useState } from "react";

export default function Magic() {
    const [num, setnum] = useState("1");
    const [skill, setskill] = useState("物體移動");

    return (
        <div className="magic" id="magic">
            <div className="content">
                <div className="introduce">
                    <Title Title="姐妹一起，透過專注力" />
                    <Title Title="來施展魔法" />
                    <video controls style={{ width: `49.79vw`, display: num ? "none" : "block", marginTop: `20px` }}>
                        <source src={MAGIC_X} type="video/mp4" />
                        您的瀏覽器不支援此 HTML5 影片標籤
                    </video>
                    <video controls style={{ width: `49.79vw`, display: num ? "block" : "none", marginTop: `20px` }}>
                        <source src={MAGIC_Y} type="video/mp4" />
                        您的瀏覽器不支援此 HTML5 影片標籤
                    </video>
                    <div className="block_title">
                        <div className="left">
                            <div className="num">0{num + 1}</div>
                            <div className="text">{skill}</div>
                        </div>
                        <div className="right">
                            <div className="r_prev" onClick={() => { setnum(0); setskill("凝聚之光"); }} style={{ backgroundColor: num ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.35)" }}></div>
                            <div className="r_next" onClick={() => { setnum(1); setskill("物體移動"); }} style={{ backgroundColor: num ? "rgba(255, 255, 255, 0.35)" : "rgba(255, 255, 255, 1)" }}></div>
                        </div>
                    </div>
                </div>
                <img src={MAGIC_SIS} alt="MAGIC_SIS" className="magic_sis" />
            </div>
        </div>
    );
}